import React, { Component } from 'react';
import './css/uswds.css';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import DataHandler from './js/DataHandler';



export class Projects extends Component {  
    static contextTypes = {
        router: PropTypes.object
    }
    displayName = Projects.name

    constructor(props, context) {
        super(props, context);
        this.state = { projects: [], loading: true };
	}

    async componentDidMount() {
        var dataHandler = new DataHandler();
        let response = await dataHandler.getProjects();

        if (response.successful) {
            console.log(response);
            this.setState({ projects: response.data, loading: false });
        } else {
            alert('error');
        }
	}
    
    render() {

        if (this.state.loading) {
            return <span>Loading...</span>;
        } else {
            return (
                <div>
                    <span> <h2>Existing Projects</h2>
                        <LinkContainer style={{ float: 'right', marginRight: '15vw' }} to="/CreateProject">
                            <button>Create Project</button>
                        </LinkContainer>
                    </span>
                    <p></p>
                        <table className="usa-table-borderless" style={{ width: "70vw" }}>
                            <thead>
                                <tr>
                                    <th scope="col">Project ID</th>
                                    <th scope="col">Project Name</th>
                                    <th scope="col">Creator Name</th>
                                    <th scope="col">Associated Unit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.projects.map(x => (
                                    <tr key={x.ID} onClick={() => this.context.router.history.push('/Project/ProjectInfo/' + x.ID)}>
                                        <th scope="row">{x.ID}</th>
                                        <td>{x.Name}</td>
                                        <td>{x.Creator}</td>
                                        <td>{x.Unit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
            );
        }
    }
}
