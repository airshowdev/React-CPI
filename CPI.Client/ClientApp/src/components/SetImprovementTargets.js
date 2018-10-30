import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';
import { Post } from '../REST';

export class SetImprovementTargets extends Component {

    displayName = SetImprovementTargets.name

    constructor(props, context) {
        super(props, context)
		this.state = { project: {}, loading: true, ImprovementTarget: "" };
		this.handleSave = this.handleSave.bind(this);
	}

	componentDidMount() {
		fetch('api/Project/GetProjectAsync?id=' + this.props.match.params.id)
			.then(response => response.json())
			.then(data => {
				this.setState({ project: data, loading: false, ImpovementTarget: data.ImporvementTarget});
			});
	}

	handleSave() {
		var tempProject = this.state.project;

		tempProject.ImprovementTarget = this.state.ImprovementTarget;

		this.setState({ project: tempProject });

		Post(this.sta.project, "Project", "UpdateProject");
	}

    render() {
        return (
            <div className="paragraph">
                <h1> PPSM Step 3 - Set Improvement Targets </h1>
                <textarea className="set-improvement-text-area" placeholder="Performance Gap:"></textarea>
                <table className = "centered-textarea">
                    <tbody>
                        <tr>
							<td style={{ border: "hidden" }}></td>
							<td style={{ borderTop: "hidden", borderRight: "hidden" }}><textarea value={this.state.ImprovementTarget} onChange={(event) => this.setState({ ImprovementTarget: event.target.value })}></textarea></td>
                            <td style={{ borderTop: "hidden", borderRight: "hidden", backgroundColor: "rgba(0, 113, 188, 0.5)" }}></td>
                            <td style={{ borderTop: "hidden", borderRight: "hidden", backgroundColor: "rgba(0, 113, 188, 0.5)" }}>Projected</td>
                            <td style={{ borderTop: "hidden", borderRight: "hidden", backgroundColor: "rgba(0, 113, 188, 0.5)" }}></td>
                        </tr>
						{/* <tr>
                            <td style={{ borderLeft: "hidden", borderBottom: "hidden" }}>TIME FRAME</td>
                            <td></td>
                            <td style={{backgroundColor: "rgba(0, 113, 188, 0.5)"}}></td>
                            <td style={{ backgroundColor: "rgba(0, 113, 188, 0.5)" }}></td>
                            <td style={{ backgroundColor: "rgba(0, 113, 188, 0.5)" }}></td>
                        </tr>
                        <tr>
                            <td style={{ borderLeft: "hidden", borderBottom: "hidden" }}>% On Time</td>
                            <td></td>
                            <td style={{ backgroundColor: "rgba(0, 113, 188, 0.5)" }}></td>
                            <td style={{ backgroundColor: "rgba(0, 113, 188, 0.5)" }}></td>
                            <td style={{ backgroundColor: "rgba(0, 113, 188, 0.5)" }}></td>
                        </tr> */}
                    </tbody>
				</table>
				<button onClick={this.handleSave}>Save</button>
            </div>
        )
    }
}