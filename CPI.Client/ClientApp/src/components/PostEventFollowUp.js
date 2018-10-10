import React from 'react';
import './css/uswds.css';

export class PostEventFollowUp extends React.Component {

    render() {
        return (
            <div>
                <head>
                    <style>{"\
                                img{\
                                    margin-left: 20px;\
                                    margin-right: 20px;}\
                                p{\
                            margin-left: 250px;\
                            margin-right: 250px;\
                            "}
                    </style>
                </head>
            <h1 align="center">POST EVENT FOLLOW UP</h1>
                <body>
                    <div align="center">
                        <img  width={250} height={250} src={require('./img/PEFU1.png')} />
                        <img  margin={100} width={250} height={250} src={require('./img/PEFU2.png')}/>
                        <img  margin={100} width={400} height={250} src={require('./img/PEFU3.png')} />
                    </div>
                    <p>At this point in the CPI event we have seen measurable evidence that the new process created from the event is working.  The goal of Post Event Follow Up is to ensure
                    we don't fall back into old methods of doing business.  There are many reasons why the team might fall back into old habits: The team is used to the old method, Members involved
                    in creating the new process PCS, The new process is not clear to some members.  We are very close to closing out this event, we just need to ensure we have taken measures to
            solidify the new process.</p>
                </body>
                </div>
            );
        }
}