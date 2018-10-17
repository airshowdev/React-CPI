import React, { Component } from 'react';
import './css/uswds.css';

const EventCharterPage = () => {
    return (
        <div style={{ border: '1px solid black' }}>
            <head>
            </head>
            <body>
                <h1 align='center'>Event Charter</h1>
                <h3 align='center'>Event Title: <h3 style={{ padding: 0, margin: 0, display: 'inline-block' }}>This is the Event Title</h3></h3>
                <h3 align='center'>Squadron: <h3 style={{ padding: 0, margin: 0, display: 'inline-block' }}>This is the Squadron Name</h3></h3>

                <br />
                <h3 style={{ textIndent: '10px' }}>VIPs</h3>

                <table style={{ align: 'left', width: '60%'}}>
                    <tr>
                        <th><strong>POSITION</strong></th>
                        <th><strong>NAME / RANK</strong></th>
                    </tr>
                    <tr>
                        <td>CHAMPION: </td>
                        <td>Jonas Jeberko</td>
                    </tr>
                    <tr>
                        <td>PROCESS OWNER: </td>
                        <td>Mason Crosby</td>
                    </tr>
                    <tr>
                        <td>UNIT AF CPI POC: </td>
                        <td>This is a name </td>
                    </tr>
                    <tr>
                        <td>EVENT TEAM LEADER(S): </td>
                        <td>Person 1, Person2 </td>
                    </tr>
                    <tr>
                        <td>FACILITATOR(S)-IN-TRAINING:  </td>
                        <td>facilitators who facilitate </td>
                    </tr>
                    <tr>
                        <td>FACILITATOR/TRAINER:  </td>
                        <td>not a person </td>
                    </tr>
                </table>

                <br/>
                <h3 style={{ textIndent: '10px' }}>PROBLEM</h3>

                <table style={{ align: 'left', width: '60%' }}>
                    <tr>
                        <th><strong>Define the problem/opportunity for impovement.<br />
                            Answer: What, when, where, and how. Don't answer 'Why?'</strong></th>
                        <th>This is an answer to the request.</th>
                    </tr>
                    <tr>
                        <td><strong>Explain how bad the problem is.<br />
                            Explain what is happening and what should happen.<br />
                            How do we know it's a problem?</strong></td>
                        <td>This also answers the request to the left.</td>
                    </tr>
                </table>

                <br/>
                <h3 style={{ textIndent: '10px' }}>IMPACT STATEMENT</h3>

                <table style={{ align: 'left', width: '60%' }}>
                    <tr>
                        <th><strong>How does the problem impact your organization's ability to<br />
                            meet its mission, quality of life, AF goals, priorities, etc.?<br/>
                            This helps categorize the improvement type.</strong></th>
                        <th>This is an answer to the request.</th>
                    </tr>
                </table>

                <br />
                <h3 style={{ textIndent: '10px' }}>GOALS / EXPECTED IMPROVEMENTS</h3>

                <table style={{ align: 'left', width: '60%' }}>
                    <tr>
                        <th><strong>What specific, quatifiable goals should the team<br />
                            strive toward during the event?<br />
                            This helps with the improvement target.</strong></th>
                        <th>This is an answer to the request.</th>
                    </tr>
                </table>

                <br />
                <h3 style={{ textIndent: '10px' }}>SIPOC (DEFINES THE SCOPE AND MAJOR ELEMENTS OF THE PROCESS)</h3>

                <table style={{ align: 'left', width: '60%' }}>
                    <tr>
                        <th><div style={{ textAlign: 'center' }}><strong>Suppliers</strong></div><br />Who supplies inputs to the process?</th>
                    <th><div style={{ textAlign: 'center' }}><strong>Inputs</strong></div><br />What people, materials, equipment, policies, or procedures feed the process?</th>
                <th><div style={{ textAlign: 'center' }}><strong>Process</strong></div><br />What are the 5-7 high level steps in the process?</th>
            <th><div style={{ textAlign: 'center' }}><strong>Outputs</strong></div><br />What products/services are generated from the process?</th>
        <th><div style={{ textAlign: 'center' }}><strong>Customers</strong></div><br />Who receives the outputs of the process?</th>                         
                    </tr>
                    <tr>
                        <td>APG<br />Support<br />Area leads</td>
                        <td>Tools<br />Storage Rack<br />IMDS<br />350 tags/parts bags<br />Computer/Printer<br />JLG operation<br />APG</td>
                        <td>
                            <table style={{ padding: 0, margin: 0 }}>
                                <tr>1) Acft begins phase day 1</tr>
                                <tr>2) Setup to remove panels</tr>
                                <tr>3) Remove panels</tr>
                                <tr>4) Document panels</tr>
                                <tr>5) Store panels on racks</tr>
                            </table>
                        </td>
                        <td>Completed 350 tags<br />Documented parts bags<br />IMDS 122s printouts<br />Stored panels on rack (Acct)</td>
                        <td>APG (repanel crew)<br />Area Leads<br />2 AMXS<br />2 MXS/Mx Flight<br />QA</td>
                    </tr>
                    <tr>
                        <td colSpan='3'><div style={{ textAlign: 'center' }}><strong>EXCLUSIONS</strong></div> (Identify any items/processes that are off limits or will not be looked at during this event.)</td>
                        <td colSpan='3'>This is a list of exlusions</td>
                    </tr>                 
                </table>

                <br />
                <h3 style={{ textIndent: '10px' }}><div style={{ textAlign: 'left' }}><strong>TEAM MEMBERS</strong></div><br />(INCLUDE INDIVIDUALS IDENTIFIED IN THE SIPOC)</h3>

                <table style={{ align: 'left', width: '60%' }}>
                    <tr textAlign='center'>
                        <th><strong>NAME/RANK</strong></th>
                        <th><strong>ORGANIZATION</strong></th>
                            <th><strong>NAME/RANK</strong></th>
                                <th><strong>OGRANIZATION</strong></th>
                    </tr>
                    <tr>
                        <td>TSgt Hagar</td>
                        <td>2 MXS</td>
                        <td>SSgt Carpenter</td>
                        <td>2 AMXS</td>
                    </tr>
                    <tr>
                        <td>SSgt Thrift</td>
                        <td>2 MXS</td>
                        <td>SSgt Ray</td>
                        <td>2 MXS</td>
                    </tr>
                    <tr>
                            <td>SrA Scott</td>
                            <td>2 MXS</td>
                            <td>A1C Belcher</td>
                            <td>2 MXS</td>
                    </tr>
                     <tr>               
                                <td>SSgt Snuffy</td>
                                <td>45 ASDF</td>
                                <td>Lt Dan</td>
                                <td>QWERTY SCS</td>
                    </tr>
                </table>

                <br />
                <h3 style={{ textIndent: '10px' }}>CURRENT PERFORMANCE</h3>
                <table style={{ align: 'left', width: '60%' }}>
                    <th>What metrics are used to measure the current performance of the process and how have they been performing?</th>
                    <th>Time start/stop time for Day 1 depanel process as tracked by dock box and averages 24 hours.</th>
                </table>

                <br />
                <h3 style={{ textIndent: '10px' }}>APPROVED BY</h3>

                <table style={{ align: 'left', width: '60%' }}>
                    <tr>                                                                                                         
                        <th><strong>POSITION</strong></th>
                            <th><strong>NAME/RANK</strong></th>
                                <th><strong>SIGNATURE</strong></th>
                                    <th><strong>DATE</strong></th>
                    </tr>
                    <tr>
                        <td><strong>CHAMPION:</strong></td>
                        <td>Major Tiffany Arnold</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><strong>PROCESS OWNER:</strong></td>
                        <td>Major Tiffany Arnold/Lt Linville</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><strong>UNIT AFSO21 POC:</strong></td>
                        <td>SMSgt Gregory Butler</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><strong>MXG/CC or DIRECTOR:</strong></td>
                        <td>Col David Carlson</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>

            </body>
        </div>
    );
}

export class EventCharter extends Component {
    render() {
        return EventCharterPage();
    }
}