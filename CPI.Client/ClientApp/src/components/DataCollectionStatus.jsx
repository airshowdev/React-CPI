import React, { Component } from 'react';


export class DataCollectionStatus extends Component {
    constructor(props) {
        super(props)
        this.state = {
			champGoal: this.props.championGoal, Type: this.props.Type, Elements: this.props.Elements, LabelProps: {}, Standard: this.props.Standard
		};
    }

	componentDidMount() {
		var properties = {
		}

		switch (this.state.Type) {
			case "OnTime":
				properties.Instructions = <div> Goal: The target date of accomplishment for each task < br />
					Actual: The date a task was actually accomplished < br />
					Percentage on Time: The percentage of tasks completed on time < br />
					Goal: The percentage of tasks completed on time that is deemed satisfactory</div >;
				properties.StandardGoalLabel = "On Time Goal";
				break;
			case "NVA":
				properties.Instructions = <div>NVA: Non - Value - Added.These are expenses that do not directly mission accomplishment, preparedness, and effectiveness < br />
					VA: Value Added.These are expenses that do directly support mission accomplishment, preparedness, and effectiveness < br />
					Percentage NVA: The percentage of total cost(NVA + VA) that NVA expenses takes up.  Lower is better < br />
					Goal: The percentage NVA that is deemed satisfactory</div>;
				properties.StandardGoalLabel = "NVA Goal";
				break;
		}

		this.setState({ LabelProps: properties });

	}

    NVAPercentage(nva, va) {
        var flNVA = parseFloat(nva);
		var flVA = parseFloat(va);

        let total = flNVA + flVA;
        return Math.round((flNVA * 100) / total);
    }

    NVAGoal(goal, nva, va) {
        return goal > this.NVAPercentage(nva, va);
    }

	calculateAverageGoal() {
		switch (this.state.Type) {
			case "NVA":
				var total = 0;
				this.state.Elements.map(x => { total += parseFloat(x.Goal); });
				return (total / this.state.Elements.length) + "%";
				break;
			case "OnTime":
				return this.state.Standard + "%";
				break;
		}
	}

	TotalCalculated() {
		switch (this.state.Type) {
			case "NVA":
				var totalNVA = 0;
				var totalVA = 0;
				this.state.Elements.map((x) => {
					totalNVA += parseFloat(x.NVA);
					totalVA += parseFloat(x.VA);
				});
				return this.NVAPercentage(totalNVA, totalVA);
				break;
			case "OnTime":
				var unsats = 0;
				this.state.Elements.map((x) => { Date.parse(x.Goal) < Date.parse(x.Actual) ? unsats++ : unsats });
				return (unsats / this.state.Elements.length) * 100;
				break;
		}
	}

	calculateUnsat() {
	
		var unsats = 0;
		switch (this.state.Type) {
			case "NVA":
				
				break;
			case "OnTime":
				this.state.Elements.map((x) => { Date.parse(x.Goal) < Date.parse(x.Actual) ? unsats++ : unsats });
				break;
		}
		return unsats;
    }

    calculateGap() {
        return ((this.calculateUnsat() * 100 / this.state.Elements.length) - parseFloat(this.calculateAverageGoal()));
    }

    calculateRevisedGap() {
        return ((this.calculateUnsat() * 100 / this.state.Elements.length) - parseFloat(this.state.champGoal));
    }

    render() {
        return (<table style={{ marginBottom: "0", width: "100%" }}>
            <tbody>
                <tr>
                    <td style={{ textAlign: "center" }}>Instructions</td>
                    <td style={{ textAlign: "center" }}>Parameters</td>
                    <td style={{ textAlign: "center" }} colSpan="2">Data Summary</td>
                </tr>
                <tr>
                    <td scope="row">
                        Guide:<br />
						<br />
						{this.state.LabelProps.Instructions}
                            </td>
                    <td className="td-resize-content" style={{ height: "1px" }}>
                        <table className="no-borderish">
                            <tbody>
								<tr>
									<td>{this.state.LabelProps.StandardGoalLabel}</td>
                                    <td>{this.calculateAverageGoal()}</td>
                                </tr>
                                <tr>
                                    <td>Champion Goal</td>
                                    <td>{this.state.champGoal}%</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td className="td-resize-content">
                        <table className="no-border">
                            <tbody>
                                <tr>
                                    <td>Total Items</td>
                                    <td>{this.state.Elements.length}</td>
                                </tr>
                                <tr>
                                    <td>Total Unsatisfactory Items</td>
                                    <td>{this.calculateUnsat()}</td>
                                </tr>
                                <tr>
                                    <td>Total Satisfactory Items</td>
                                    <td>{this.state.Elements.length - parseFloat(this.calculateUnsat())}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <table className="no-border">
                            <tbody>
                                <tr>
                                    <td>Total Calculated</td>
                                    <td>{this.TotalCalculated()}%</td>
                                </tr>
                                <tr>
                                    <td>{this.state.Type == "OnTime" ? "Goal" : "Average Goal"}</td>
                                    <td>{this.calculateAverageGoal()}</td>
                                </tr>
                                <tr>
                                    <td>Gap</td>
                                    <td>{this.calculateGap()}%</td>
                                </tr>
                                <tr>
                                    <td>Champion Goal</td>
                                    <td>{this.state.champGoal}%</td>
                                </tr>
                                <tr>
                                    <td>Revised Gap</td>
                                    <td>{this.calculateRevisedGap()}%</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        )
    }
}