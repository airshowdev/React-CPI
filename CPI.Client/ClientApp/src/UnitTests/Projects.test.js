import 'jsdom-global/register';
import React from 'react';
import {Projects} from '../components/Projects';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockDataHandler from '../__mocks__/mockDataHandler';


configure({adapter: new Adapter()})

const checkAgainstForLoad = <span>Loading...</span>;
const checkLoadedData = <button id="5bf2ddc27507820c30274604">Projects</button>

describe('Display Behavior', () => {

    beforeEach(()=> {
       
    });


    it('shows the loading indicator when data is being pulled', ()=>{
        //Arrange
        const wrapper = shallow(<Projects/>);

        //Act
        let result = wrapper.contains(checkAgainstForLoad)

        //Assert
        expect(result).toEqual(true);
    })

    it('displays data when the data has been pulled', async () => {

        //Arrange
        const wrapper = shallow(<Projects/>);
        wrapper.instance().alertBad = jest.fn();

        //Act
        await wrapper.instance().componentDidMount();
        console.log(wrapper.debug())
        wrapper.update();

        //Assert
        expect(wrapper.instance().alertBad).toHaveBeenCalledTimes(0);
        expect(wrapper.state().projects).toEqual(new mockDataHandler().projectsData());
        expect(wrapper.find('.projectRow').exists()).toEqual(true);
    })

    it('alerts the user when there is an error pulling data', async () => {

        //Arrange
        const wrapper = shallow(<Projects/>);
        wrapper.instance().alertBad = jest.fn();

        //Act
        wrapper.instance().componentDidMount({
            successful: false,
            data: []
        });

        //Assert
        expect(wrapper.instance().alertBad).toHaveBeenCalledTimes(1);
    })
}
)

