import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class DataCollection extends Component {

	static contextTypes = {
		router: PropTypes.object
	}

	constructor(props) {
		super(props);

		this.state = {type: this.props.type || "", loading: true};

		this.handleSelect = this.handleSelect.bind(this);

	}
	componentDidMount() {
		fetch("api/Project/GetProjectAsync?id=" + this.props.match.params.id)
			.then(response => response.json())
			.then(data => this.setState({ loading: false, type: data.DataCollection.Type }
			));
	}
	handleSelect() {
		switch (this.state.type) {
			case "NVA":
				this.context.router.history.push('/Project/NVAData/' + this.props.match.params.id)
				break;
			case "OnTime":
				this.context.router.history.push('/Project/OnTimeData/' + this.props.match.params.id)
				break;
		}
	}

	render() {
		switch (this.state.type) {
			case "NVA":
				this.context.router.history.push('/Project/NVAData/' + this.props.match.params.id)
				break;
			case "OnTime":
				this.context.router.history.push('/Project/OnTimeData/' + this.props.match.params.id)
				break;
		}
		return (
			this.state.loading ? <span>Loading</span> : (
				<div>
				<h3> Please Select a project type</h3>
				<select>
					<option onChange={() => this.setState({ type: "OnTime" })} value="OnTime">On Time</option>
					<option onChange={() => this.setState({type: "NVA"})} value="NVA">NVA</option>
				</select>
					<button onClick={this.handleSelect}>Select</button>
					</div>
				)
			)
	}
}