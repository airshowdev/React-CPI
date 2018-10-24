import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Rest, Post } from '../../REST'

export class DataCollection extends Component {

	static contextTypes = {
		router: PropTypes.object
	}
    displayName = DataCollection.name;

	constructor(props) {
		super(props);
        this.state = {
            loading: true, selectedType: "", ProjectDataCollection: {}
        };

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.redirectPage = this.redirectPage.bind(this);
	}

	componentDidMount() {
		fetch("api/Project/GetProjectAsync?id=" + this.props.match.params.id)
			.then(response => response.json())
			.then(data => this.setState({ ProjectDataCollection: data.DataCollection, loading: false }));
    }

    handleSubmit() {
        this.redirectPage(this.state.selectedType);
	}
    redirectPage(value) {
        switch (value) {
			case "NVA":
				this.context.router.history.push('/Project/NVAData/' + this.props.match.params.id)
				break;
			case "OnTime":
				this.context.router.history.push('/Project/OnTimeData/' + this.props.match.params.id)
				break;
		}
	}

	handleChange(event) {
		this.setState({ selectedType: event.target.value });
	}

    render() {
        this.redirectPage(this.state.ProjectDataCollection.Type);
		return (
			this.state.loading ? <span>Loading</span> : 
				<div>
					<h3> Please Select a project type</h3>
                    <select onChange={this.handleChange} value={this.state.selectedType}>
                    <option value="OnTime">On Time</option>
					<option value="NVA">NVA</option>
					</select>
					<button onClick={this.handleSubmit}>Select</button>
                </div>
			)
	}
}