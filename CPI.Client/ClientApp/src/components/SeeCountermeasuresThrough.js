import React, { Component } from 'react';
import './css/uswds.css';
import './css/HallMartino.css';
import PropTypes from 'prop-types';
import { Post } from '../REST';

export class SeeCountermeasuresThrough extends Component {

    displayName = SeeCountermeasuresThrough.name;

    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context) {
        super(props, context)
		this.state = { project: {}, loading: true, RootCauses: []};

		this.handleChange = this.handleChange.bind(this);
		this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
            fetch("api/Project/GetProjectAsync?id=" + this.props.match.params.id)
				.then(response => response.json())
				.then(data => {
					this.setState({ project: data, loading: false, RootCauses: data.RootCauses})
				});
	}

	handleChange(event) {
		var tempRootCauses = this.state.RootCauses;
        var i = event.target.id.split("_");
		switch (event.target.name) {
			case "ActionOfficer":
				tempRootCauses[i[0]].Countermeasures[i[1]].ActionOfficer = event.target.value;
				break;
			case "Date":
				tempRootCauses[i[0]].Countermeasures[i[1]].Date = event.target.value;
				break;
			case "Status":
				tempRootCauses[i[0]].Countermeasures[i[1]].Status = event.target.value;
				break;
		}

		this.setState({ RootCauses: tempRootCauses });
	}

	handleSave() {
		var tempProject = this.state.project;
		tempProject.RootCauses = this.state.RootCauses;
		this.setState({ project: tempProject });

		Post(this.state.project, "Project", "UpdateProject");
	}

    render() {
        return (
            <div className="usa-grid">
                <div className="paragraph">
                    <h1> PPSM Step 6 - See Countermeasures Through </h1>
                    <div style={{ border: "solid", borderLeft: "hidden", borderRight: "hidden", borderBottom: "hidden", marginLeft: "20px", marginRight: "20px", marginBottom: "3px" }}>
                        <h3 style={{ marginTop: "10px" }}>Develop an action plan to see countermeasures through</h3>
                    </div>
					<div>
						<table className="see-countermeasures-through-table" >
							<thead>
								<th style={{ padding: "0px", maxWidth: "100px", minWidth: "100px" }}>Task</th>
								<th>Action Officer</th>
								<th style={{ padding: "0px", maxWidth: "100px", minWidth: "100px" }} >Date</th>
								<th>Status</th>
							</thead>
							<tbody>
								{this.state.RootCauses.map((x, i) => (
									x.Countermeasures.length > 0 ?
										x.Countermeasures.map((y, j) => (
											<tr>
												<td style={{ padding: "0px" }}><label name="Task" id={i.toString() + "_" + j.toString()} > va{this.state.RootCauses[i].Countermeasures[j].Description}</label></td>
												<td style={{ padding: "0px" }}><input type="text" placeholder="x" name="ActionOfficer" id={i.toString() + "_" + j.toString()} value={this.state.RootCauses[i].Countermeasures[j].ActionOfficer} onChange={this.handleChange} /></td>
												<td style={{ padding: '0px' }}><input type="text" placeholder="x" name="Date" id={i.toString() + "_" + j.toString()} value={this.state.RootCauses[i].Countermeasures[j].Date} onChange={this.handleChange} /></td>
												<td style={{ padding: "0px" }}><input type="text" placeholder="x" name="Status" id={i.toString() + "_" + j.toString()} value={this.state.RootCauses[i].Countermeasures[j].Status} onChange={this.handleChange} /></td>
											</tr>)) : null
								))}					
							</tbody></table>
						<button onClick={this.handleSave}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}