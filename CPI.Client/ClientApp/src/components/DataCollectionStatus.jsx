import React, { Component } from 'react';


export class DataCollectionStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            champGoal: "", Type: this.props.Type, Elements: this.props.Elements, Standard: this.props.Standard, LabelProps: {}
        };
    }

    componentDidMount() {
        this.fillHeader();
    }

    fillHeader() {
        var properties = {};

        switch (this.state.Type) {
            case "OnTime":
                properties.Instructions = (<div> Goal: The target date of accomplishment for each task < br />
                    Actual: The date a task was actually accomplished < br />
                    <br/>
                    Percentage on Time: The percentage of tasks completed on time < br />
                    <br />

                    Goal: The percentage of tasks completed on time that is deemed satisfactory</div >);
                properties.StandardGoalLabel = "On Time Goal";
                break;
            case "NVA":
                properties.Instructions = (<div>NVA: Non - Value - Added.These are expenses that do not directly mission accomplishment, preparedness, and effectiveness < br />
                    <br/>
                    VA: Value Added.These are expenses that do directly support mission accomplishment, preparedness, and effectiveness < br />
                    <br/>
                    Percentage NVA: The percentage of total cost(NVA + VA) that NVA expenses takes up.  Lower is better < br />
                    <br/>
                    Goal: The percentage NVA that is deemed satisfactory</div>);
                properties.StandardGoalLabel = "NVA Goal";
                break;
            default:
                properties.Instructions = (<div> Error Selecting project type. Given = {this.state.Type}</div>);
                properties.StandardGoalLabel = "Goal Placeholder";
                break;
        }


        this.setState({ Standard: this.calculateAverageGoal(), LabelProps: properties });
    }

    NVAPercentage(nva, va) {
        var flNVA = parseFloat(nva);
		var flVA = parseFloat(va);

        let total = flNVA + flVA;

        let out = flNVA * 100 / (flNVA + flVA);

        return Math.round(out);
    }

    NVAGoal(goal, nva, va) {
        return parseFloat(goal) > this.NVAPercentage(nva, va);
    }

	calculateAverageGoal() {
		switch (this.state.Type) {
			case "NVA":
				var total = 0;
                this.state.Elements.map(x => { total += parseFloat(x.Goal); });
                return Math.round(total / this.state.Elements.length) ;
			case "OnTime":
				return this.state.Standard;
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
			case "OnTime":
				var unsats = 0;
				this.state.Elements.map((x) => { Date.parse(x.Goal) < Date.parse(x.Actual) ? unsats++ : unsats });
				return (unsats / this.state.Elements.length) * 100;
		}
	}

	calculateUnsat() {	
		var unsats = 0;
		switch (this.state.Type) {
            case "NVA":
                this.state.Elements.map((x) => !this.NVAGoal(this.state.Standard, x.NVA, x.VA) ? unsats = unsats : unsats++);
				break;
			case "OnTime":
				this.state.Elements.map((x) => { Date.parse(x.Goal) < Date.parse(x.Actual) ? unsats++ : unsats });
				break;
		}
		return unsats;
    }

    calculateGap() {
        return Math.round(((this.calculateUnsat() * 100 / this.state.Elements.length) - parseFloat(this.calculateAverageGoal())));
    }

    calculateRevisedGap() {
        return isNaN((this.calculateUnsat() * 100 / this.state.Elements.length) - parseFloat(this.state.champGoal)) ? "0" : Math.round((this.calculateUnsat() * 100 / this.state.Elements.length) - parseFloat(this.state.champGoal));
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
                                    <td>{this.calculateAverageGoal()}%</td>
                                </tr>
                                <tr>
                                    <td>Champion Goal</td>
                                    <td>{this.state.champGoal ? this.state.champGoal + "%" : "unset"}</td>
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
                                    <td>{this.state.Type === "OnTime" ? "Goal" : "Average Goal"}</td>
                                    <td>{this.calculateAverageGoal()}</td>
                                </tr>
                                <tr>
                                    <td>Gap</td>
                                    <td>{this.calculateGap()}%</td>
                                </tr>
                                <tr>
                                    <td>Champion Goal</td>
                                    <td>{this.state.champGoal ? this.state.champGoal + '%' : 'Unset'}</td>
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