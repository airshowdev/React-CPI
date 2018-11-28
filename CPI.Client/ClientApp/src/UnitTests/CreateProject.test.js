import 'jsdom-global/register';
import React from 'react';
import {CreateProject} from '../components/CreateProject';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockDataHandler from '../__mocks__/mockDataHandler';


configure({adapter: new Adapter()})

const checkAgainstForLoad = <span>Loading...</span>;
const checkLoadedData = (
    <div className="usa-form">
					<h2 style={{marginLeft: "0"}}>Create Project</h2>
                    <label htmlFor="ProjectName">Project Name</label>
                    <input id="ProjectName" type="text" onChange={(event) => this.setState({ name: event.target.value })} value={this.state.name}required aria-required="true"/>


						<label htmlFor="CreatorLast">Creator Name</label>
						<input id="CreatorLast" onChange={(event) => this.setState({ creatorName: event.target.value })} type="text" required aria-required="true" />

						<label htmlFor="options">Select Base</label>
						<input id="Base" onChange={(event) => this.setState({ base: event.target.value })} required aria-required="true" />
				
                    <button type="submit" className="usa-button" onClick={this.handleSubmit}>Create Project</button>
            </div>
)

describe('Display Behavior', () => {

    beforeEach(()=> {
       
    });


    it('loads without failing', ()=>{
        //Arrange
        const wrapper = shallow(<CreateProject/>);

        //Act
        let result = wrapper.contains(checkAgainstForLoad)

        //Assert
        expect(result).toEqual(true);
    })

    it('requires a Project Name to be input in order to create the project', ()=>{
        //Arrange
        const wrapper = shallow(<CreateProject/>);

        //Act

        //Assert
    })
    it('requires a Creator Name to be input in order to create the project', ()=>{
        //Arrange
        const wrapper = shallow(<CreateProject/>);

        //Act

        //Assert
    })
    it('requires a Base to be input in order to create the project', ()=>{
        //Arrange
        const wrapper = shallow(<CreateProject/>);

        //Act

        //Assert
    })

    it('properly formats the data when sufficient data is present and posts it', () =>{
     //Arrange
     const wrapper = shallow(<CreateProject/>);

     //Act
    });
})

