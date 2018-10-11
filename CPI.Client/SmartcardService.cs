using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.InteropServices;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Xml;

namespace CPI.Client
{
    public static class BaseSmartCardCryptoProvider
    {
        private const string _providerName = "Microsoft Base Smart Card Crypto Provider";

        private static class NativeMethods
        {
            public const uint PROV_RSA_FULL = 0x00000001;
            public const uint CRYPT_VERIFYCONTEXT = 0xF0000000;
            public const uint CRYPT_FIRST = 0x00000001;
            public const uint CRYPT_NEXT = 0x00000002;
            public const uint ERROR_NO_MORE_ITEMS = 0x00000103;
            public const uint PP_ENUMCONTAINERS = 0x00000002;

            [DllImport("advapi32.dll", BestFitMapping = false, ThrowOnUnmappableChar = true, SetLastError = true)]
            public static extern bool CryptAcquireContext(
            ref IntPtr phProv,
            [MarshalAs(UnmanagedType.LPStr)] string pszContainer,
            [MarshalAs(UnmanagedType.LPStr)] string pszProvider,
            uint dwProvType,
            uint dwFlags);

            [DllImport("advapi32.dll", BestFitMapping = false, ThrowOnUnmappableChar = true, SetLastError = true)]
            public static extern bool CryptGetProvParam(
            IntPtr hProv,
            uint dwParam,
            [MarshalAs(UnmanagedType.LPStr)] StringBuilder pbData,
            ref uint pdwDataLen,
            uint dwFlags);

            [DllImport("advapi32.dll", SetLastError = true)]
            public static extern bool CryptReleaseContext(
            IntPtr hProv,
            uint dwFlags);
        }

        public static List<X509Certificate2> GetCertificates()
        {
            List<X509Certificate2> certs = new List<X509Certificate2>();

            X509Store x509Store = null;

            try
            {
                x509Store = new X509Store(StoreName.My, StoreLocation.CurrentUser);
                x509Store.Open(OpenFlags.ReadOnly | OpenFlags.OpenExistingOnly);

                List<string> containers = GetKeyContainers();

                foreach (string container in containers)
                {
                    CspParameters cspParameters = new CspParameters((int)NativeMethods.PROV_RSA_FULL, _providerName, container);
                    cspParameters.Flags = CspProviderFlags.UseExistingKey;
                    string pubKeyXml = null;
                    using (RSACryptoServiceProvider rsaProvider = new RSACryptoServiceProvider(cspParameters))
                        pubKeyXml = rsaProvider.ToXmlString();
                    foreach (X509Certificate2 cert in x509Store.Certificates)
                    {
                        if ((cert.PublicKey.Key.ToXmlString() == pubKeyXml) && cert.HasPrivateKey)
                            certs.Add(cert);
                    }
                }
            }
            finally
            {
                if (x509Store != null)
                {
                    x509Store.Close();
                    x509Store = null;
                }
            }

            return certs;
        }

        private static List<string> GetKeyContainers()
        {
            List<string> containers = new List<string>();

            IntPtr hProv = IntPtr.Zero;

            try
            {
                if (!NativeMethods.CryptAcquireContext(ref hProv, null, _providerName, NativeMethods.PROV_RSA_FULL, NativeMethods.CRYPT_VERIFYCONTEXT))
                    throw new Win32Exception(Marshal.GetLastWin32Error());

                uint pcbData = 0;
                uint dwFlags = NativeMethods.CRYPT_FIRST;
                if (!NativeMethods.CryptGetProvParam(hProv, NativeMethods.PP_ENUMCONTAINERS, null, ref pcbData, dwFlags))
                    throw new Win32Exception(Marshal.GetLastWin32Error());

                StringBuilder sb = new StringBuilder((int)pcbData + 1);
                while (NativeMethods.CryptGetProvParam(hProv, NativeMethods.PP_ENUMCONTAINERS, sb, ref pcbData, dwFlags))
                {
                    containers.Add(sb.ToString());
                    dwFlags = NativeMethods.CRYPT_NEXT;
                }

                int err = Marshal.GetLastWin32Error();
                if (err != NativeMethods.ERROR_NO_MORE_ITEMS)
                    throw new Win32Exception(err);

                if (hProv != IntPtr.Zero)
                {
                    if (!NativeMethods.CryptReleaseContext(hProv, 0))
                        throw new Win32Exception(Marshal.GetLastWin32Error());
                    hProv = IntPtr.Zero;
                }
            }
            catch
            {
                if (hProv != IntPtr.Zero)
                {
                    if (!NativeMethods.CryptReleaseContext(hProv, 0))
                        throw new Win32Exception(Marshal.GetLastWin32Error());
                    hProv = IntPtr.Zero;
                }

                throw;
            }

            return containers;
        }
    }


    public static class RSACryptoServiceProviderExtensions
    {
        public static void FromXmlString(this RSACryptoServiceProvider rsa, string xmlString)
        {
            RSAParameters parameters = new RSAParameters();

            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.LoadXml(xmlString);

            if (xmlDoc.DocumentElement.Name.Equals("RSAKeyValue"))
            {
                foreach (XmlNode node in xmlDoc.DocumentElement.ChildNodes)
                {
                    switch (node.Name)
                    {
                        case "Modulus": parameters.Modulus = Convert.FromBase64String(node.InnerText); break;
                        case "Exponent": parameters.Exponent = Convert.FromBase64String(node.InnerText); break;
                        case "P": parameters.P = Convert.FromBase64String(node.InnerText); break;
                        case "Q": parameters.Q = Convert.FromBase64String(node.InnerText); break;
                        case "DP": parameters.DP = Convert.FromBase64String(node.InnerText); break;
                        case "DQ": parameters.DQ = Convert.FromBase64String(node.InnerText); break;
                        case "InverseQ": parameters.InverseQ = Convert.FromBase64String(node.InnerText); break;
                        case "D": parameters.D = Convert.FromBase64String(node.InnerText); break;
                    }
                }
            }
            else
            {
                throw new Exception("Invalid XML RSA key.");
            }

            rsa.ImportParameters(parameters);
        }

        public static string ToXmlString(this AsymmetricAlgorithm algo, bool includePrivateParameters = false)
        {
            if (algo is RSACryptoServiceProvider)
            {
                RSACryptoServiceProvider rsa = algo as RSACryptoServiceProvider;
                RSAParameters parameters = rsa.ExportParameters(includePrivateParameters);
                if (includePrivateParameters)
                {
                    return string.Format("<RSAKeyValue><Modulus>{0}</Modulus><Exponent>{1}</Exponent><P>{2}</P><Q>{3}</Q><DP>{4}</DP><DQ>{5}</DQ><InverseQ>{6}</InverseQ><D>{7}</D></RSAKeyValue>",
                        Convert.ToBase64String(parameters.Modulus),
                        Convert.ToBase64String(parameters.Exponent),
                        Convert.ToBase64String(parameters.P),
                        Convert.ToBase64String(parameters.Q),
                        Convert.ToBase64String(parameters.DP),
                        Convert.ToBase64String(parameters.DQ),
                        Convert.ToBase64String(parameters.InverseQ),
                        Convert.ToBase64String(parameters.D));
                }

                return string.Format("<RSAKeyValue><Modulus>{0}</Modulus><Exponent>{1}</Exponent></RSAKeyValue>",
                    Convert.ToBase64String(parameters.Modulus),
                    Convert.ToBase64String(parameters.Exponent));
            }
            else if (algo is RSA)
            {
                RSA rsa = algo as RSA;
                RSAParameters parameters = rsa.ExportParameters(includePrivateParameters);
                if (includePrivateParameters)
                {
                    return string.Format("<RSAKeyValue><Modulus>{0}</Modulus><Exponent>{1}</Exponent><P>{2}</P><Q>{3}</Q><DP>{4}</DP><DQ>{5}</DQ><InverseQ>{6}</InverseQ><D>{7}</D></RSAKeyValue>",
                        Convert.ToBase64String(parameters.Modulus),
                        Convert.ToBase64String(parameters.Exponent),
                        Convert.ToBase64String(parameters.P),
                        Convert.ToBase64String(parameters.Q),
                        Convert.ToBase64String(parameters.DP),
                        Convert.ToBase64String(parameters.DQ),
                        Convert.ToBase64String(parameters.InverseQ),
                        Convert.ToBase64String(parameters.D));
                }

                return string.Format("<RSAKeyValue><Modulus>{0}</Modulus><Exponent>{1}</Exponent></RSAKeyValue>",
                    Convert.ToBase64String(parameters.Modulus),
                    Convert.ToBase64String(parameters.Exponent));
            }
            else if (algo is DSACryptoServiceProvider)
            {
                DSACryptoServiceProvider dsa = algo as DSACryptoServiceProvider;
                return dsa.ToXmlString(includePrivateParameters);
            }
            else return null;
        }
    }
}
