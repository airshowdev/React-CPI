import React, { Component } from 'react';
import './css/uswds.css';
import './css/projectnav.css';
import { Link } from 'react-router';

export class SideNav extends Component {
    displayName = SideNav.name

    constructor(props, context) {
        super(props, context)
    }


    render() {        
        var navHeight = {
            height: '905px'
        };

        
        return (
            <aside className="sidenav sticky" style={navHeight}>
                <ul className="usa-sidenav-list ">
                    <li className="project-nav" tabIndex={1}>
                        <a >Pre-Event Planning (T-3 Weeks)</a>
                        <ul className="usa-sidenav-sub_list ">
                            <li>
                                <a>Initial Data Collection</a>
                                </li>
                            <li>
                                <a>Event Go/No Go Decision</a>
                            </li>
                            <li>
                                <a>Request Mentor</a>
                            </li>
                            <li>
                                <a>Meet With Champion</a>
                            </li>
                            <li>
                                <a>Meet with Team Leader</a>
                            </li>
                            <li>
                                <a>Draft Charter</a>
                            </li>
                        </ul>
                    </li>
                    <li className="project-nav" tabIndex={2}>
                        <a>Pre-Event Preparation (T-2 and T-1 Weeks)</a>
                        <ul className="usa-sidenav-sub_list">
                            <li>
                                <a >Process Walk</a>
                            </li>
                            <li>
                                <a >Finalize Charter</a>
                            </li>
                            <li>
                                <a >Review KPI</a>
                            </li>
                            <li>
                                <a >Identify Event Location</a>
                            </li>
                            <li>
                                <a>Distribute Event Notification and Charter</a>
                            </li>
                            <li>
                                <a>Schedule In Brief/Out Brief</a>
                            </li>
                            <li>
                                <a >Team Process Walk</a>
                            </li>
                            <li>
                                <a >Team Kick-Off and Awareness Training</a>
                            </li>
                            <li>
                                <a >Validate Data Collection</a>
                            </li>
                            <li>
                                <a >Obtain Supplies</a>
                            </li>
                            <li>
                                <a >Event Go/No-Go</a>
                            </li>
                            <li>
                                <a >Room Set-Up</a>
                            </li>
                        </ul>
                    </li>
                    <li className="project-nav" tabIndex={3}>
                        <a >Event Execution (T-0 Weeks)</a>    
                        <ul className="usa-sidenav-sub_list">
                            <li>
                                <a >1. Clarify and Validate the Problem</a>
                            </li>
                            <li>
                                <a >2. Identify Performance Gaps</a>
                            </li>
                            <li>
                                <a >3. Set Improvement</a>
                            </li>
                            <li>
                                <a >4. Determine Root Cause(s)</a>
                            </li>
                            <li>
                                <a >5. Develope Countermeasures</a>
                            </li>
                            </ul>
                    </li>
                    <li className="project-nav" tabIndex={4}>
                        <a >Post-Event Implementation (T-0 Weeks)</a>
                        <ul className="usa-sidenav-sub_list">
                                <li>
                                    <a >6. See Countermeasures Through</a>
                                </li>
                                <li>
                                    <a > 7. Validate Results</a>
                                </li>
                            </ul>
                    </li>
                    <li className="project-nav" tabIndex={5}>
                        <a >
                            Post-Event Follow Up(T-0 Weeks)
                        </a>
                        <ul className="usa-sidenav-sub_list">
                            <li>
                                <a >8. Standardize Successful Process</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
//            <aside className="sidenav sticky" style={navHeight}>
//                <ul className="usa-sidenav-list">
//                    <li>
//                        <a href="/components/" className="usa-current">
//                            Overview                        
//                        </a>
//                     </li>

//                    <li>


//                        <a href="/components/typography/">

//                            Typography
                         
//</a>



//                    </li>

//                    <li>


//                        <a href="/components/colors/">

//                            Colors
                         
//</a>



//                    </li>

//                    <li>


//                        <a href="/components/icons/">

//                            Icons
                         
//</a>



//                    </li>

//                    <li>


//                        <a href="/components/grids/">

//                            Grids
                         
//</a>



//                    </li>

//                    <li>


//                        <a href="/components/buttons/">

//                            Buttons
                         
//</a>



//                    </li>

//                    <li>


//                        <a href="/components/labels/">

//                            Labels
                         
//</a>



//                    </li>

//                    <li>


//                        <a href="/components/tables/">

//                            Tables
                         
//</a>



//                    </li>

//                    <li>


//                        <a href="/components/alerts/">

//                            Alerts
                         
//</a>



//                    </li>

//                    <li>


//                        <a href="/components/accordions/">

//                            Accordions
                         
//</a>



//                    </li>

//                    <li>


//                        <a>

//                            Form controls
                         
//</a>



//                    </li>

//                    <li>


//                        <a href="/components/form-templates/">

//                            Form templates
                         
//</a>



//                    </li>

//                    <li>


//                        <a href="/components/search-bar/">

//                            Search bar
                         
//</a>



//                    </li>

//                    <li>


//                        <a href="/components/sidenav/">

//                            Side navigation
                         
//</a>



//                    </li>

//                    <li>


//                        <a href="/components/headers/">

//                            Headers
                         
//</a>



//                    </li>

//                    <li>


//                        <a href="/components/footers/">

//                            Footers
                         
//</a>



//                    </li>


//                </ul>

//            </aside>


        );
    }
}