using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using SharpRaven.Data;
using SharpRaven;

namespace CpiApi.Etc
{
    public static class SentryExtensions
    {
        public static void UseSentry(this IApplicationBuilder builder)
        {
            builder.Use(async (context, next) =>
            {
                try
                {
                    await next.Invoke();
                }
                catch (Exception e)
                {
                    var client = context.RequestServices.GetService<IRavenClient>();
                    if (client != null)
                    {
                        var id = await client.CaptureAsync(new SentryEvent(e));
                        if (id != null && !context.Response.HasStarted)
                        {
                            context.Response.Headers.TryAdd("X-Sentry-Id", id);
                        }
                    }

                    throw;
                }
            });
        }
    }
}
