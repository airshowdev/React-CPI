import React, { Component } from 'react';


export class DataCollectionStatus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            champGoal: this.props.championGoal, Type: this.props.Type, Elements: this.props.Elements
        };
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
        var total = 0;
        this.state.Elements.map(x => { total += parseFloat(x.Goal); });
        return (total / this.state.Elements.length);
    }
    calculateUnsat() {
        var unsats = 0;
        this.state.Elements.map((x) => { (!(parseFloat(x.NVA) * 100 / ((parseFloat(x.VA) + parseFloat(x.NVA))) > x.Goal) ? unsats++ : unsats) });
        return unsats;
    }

    calculateGap() {
        return ((this.calculateUnsat() * 100 / this.state.Elements.length) - this.calculateAverageGoal());
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
                        NVA: Non-Value-Added.  These are expenses that do not directly mission accomplishment, preparedness, and effectiveness<br />
                        VA: Value Added.  These are expenses that do directly support mission accomplishment, preparedness, and effectiveness<br />
                        Percentage NVA: The percentage of total cost (NVA + VA) that NVA expenses takes up.  Lower is better<br />
                        Goal: The percentage NVA that is deemed satisfactory
                            </td>
                    <td className="td-resize-content" style={{ height: "1px" }}>
                        <table className="no-borderish">
                            <tbody>
                                <tr>
                                    <td>NVA Percentage Goal</td>
                                    <td>{this.calculateAverageGoal()}%</td>
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
                                    <td>Total NVA</td>
                                    <td>{this.calculateUnsat() * 100 / this.state.Elements.length}%</td>
                                </tr>
                                <tr>
                                    <td>Average Goal</td>
                                    <td>{this.calculateAverageGoal()}%</td>
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