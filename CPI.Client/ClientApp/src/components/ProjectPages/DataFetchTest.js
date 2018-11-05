import React, { Component } from 'react';
import DataHandler from '../js/DataHandler';
import PropTypes from 'prop-types';


export class DataFetchTest extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    displayName = DataFetchTest.name;

    constructor(props, context) {
        super(props, context)
        this.state = { project: {}, BarData: {}, loading: true };
        this.DataHandler = new DataHandler();

    }

    async componentDidMount() {
        var newData = {};
        var id = '5bd1e0668828cf6d388d80f8';
        newData = this.DataHandler.getDataCollection(id);

        console.log(newData);
    }

    render() {
        return (
            <div></div>
        )
    }

}
