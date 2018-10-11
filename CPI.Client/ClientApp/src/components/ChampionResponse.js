import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';

export class ChampionResponse extends Component {

    displayName = ChampionResponse.name

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, loading: true, successPercent: "" };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event)
    {
        if (!event.target.value.includes("%"))
            this.setState({ successPercent: "%" + event.target.value });
        else
            this.setState({ successPercent: event.target.value });
    }

    render(project) {
        return (
            <div className="left-aligned-paragraph">
                <h3>Deficiency:</h3>
                    <p>
                        According to preliminary information obtained from the MPS, our unit is not meeting standards for turning performance reports in on time to the MPS. 
                    </p>
                <h3>Expectation:</h3>
                    <p>
                        _________ requires that 100% of performance reports be turned into the MPS by suspsence date established by the MPS.  
                        This enables the MPS to comply with getting reports to AFPC NLT 45 days after close-out-date (COD), 
                        per AFI 36-2406 para 1.4.2.3.2 so it can be placed in the members records NLT 60 days after the COD.
                    </p>
                <h3>Recommendation:</h3>
                    <p>
                        In order to meet expectations set by our local MPS, and ultimately AF requirement for on time turn in of peformance reports, 
                        it is recommended that our unit complete a CPI event to improve our current process.
                        An effective Process Improvement event on our existing process could increase performance by -5%.
                    </p>
                <h3>Champion's Response:</h3>
                    <div className="radio-input-size">
                        <input type="radio" value="1" name="OptionOne" id="DontSupport" />
                        <label htmlFor="DontSupport"><span className="radio-input-size">I do not concur with supporting a CPI event at this time.</span></label>
                    </div>
                    <div className="radio-input-size">
                        <input type="radio" value="2" name="OptionTwo" id="FullySupport" />
                        <label htmlFor="FullySupport">I fully support a CPI event to improve our current performance.</label>
                    </div>
                    <div className="paragraph-response-text">
                    <div>
                        <div style={{width:"inherit"}}>
                            <label htmlFor="teamLead">
                                The person I would like to be the Team Leader for this event is 
                            </label>
                            <input type="text" id="teamLead" name="teamLeadName" />
                        </div>
                        <div style={{ whiteSpace: "nowrap" }}> My definition of "success" for this CPI event is to achieve an "on-time" turn in rate to MPS of
                            <input id="goalInput" type="text" value={this.state.successPercent} onChange={this.handleChange} />
                            
                        </div>
                      </div>
                    </div>
                    <div className="radio-input-size">
                        <input type="radio" value="3" name="OptionThree" id="WillSupport" />
                        <label htmlFor="WillSupport"><span className="radio-input-size">I will support this CPI Event by allowing team members to use duty hours to complete tasks related to this event.
                                In addition, I will attend key portions of the event - Kickoff, Vector Check, Wrap-up.</span></label>
                    </div>
            </div>
            )
    }

}