import React, { Component } from 'react';
import './css/uswds.css';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import DataHandler from './js/DataHandler';

const contextTypes = {
    router: PropTypes.object
}

export class Projects extends Component {  
    
    constructor(props, context) {
        super(props, context);
        this.state = { projects: [], loading: true };
        
        this.handleDelete = this.handleDelete.bind(this);
        this.onSelectClick = this.onSelectClick.bind(this);
    }
    


    async componentDidMount(testData) {
        if(!testData){
            var dataHandler = new DataHandler();
            let response = await dataHandler.getProjects();

            if (response.successful) {
                this.setState({ projects: response.data, loading: false });
            } else {
               this.alertBad();
            }
        } else {
            if(testData.successful){
                this.setState({ projects: testData.data, loading: false });
            } else {
                this.alertBad();
            }
        }
	}

	async handleDelete(event) {
		var index  = event.target.name
		let dHandler = new DataHandler();
		let response = await dHandler.deleteProject(event.target.id);

		if (response.successful) {
			let Projects = this.state.projects;
			Projects.splice(index, 1);
			this.setState({ projects: Projects });
		} else {
			alert('there was an error deleting this project')
		}
    }
    
    onSelectClick(event){   
        this.context.router.history.push('/Project/ProjectInfo/' + event.target.ID);
    }

    alertBad(){ 
        alert('error'); 
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
                                {this.state.projects.map((x, i) => (
                                    <tr className="projectRow" key={x.ID}>
                                        <th scope="row">{x.ID}</th>
                                        <td>{x.Name}</td>
                                        <td>{x.Creator}</td>
										<td>{x.Unit}</td>
									<td><button id={x.ID} onClick={this.onSelectClick}>Select</button></td>
									<td><button id={x.ID} name={i} onClick={this.handleDelete}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
            );
        }
    }
}
