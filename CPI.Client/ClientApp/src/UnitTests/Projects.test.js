import 'jsdom-global/register';
import React from 'react';
import {Projects} from '../components/Projects';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';

jest.setTimeout(5000);
configure({adapter: new Adapter()})

const checkAgainst = <span>Loading...</span>;
const checkAgainstButBad = <span>This ain't even loading, buddy</span>;

var component;

describe('Display Behavior', () => {

    beforeEach(()=> {
       });

    it('test fails while renders as a whole component', ()=>{
        const wrapper = shallow(<Projects/>);
        let result = wrapper.contains(checkAgainstButBad)
        expect(result).toEqual(false);
    })

    it('renders as a whole component', ()=>{
        const wrapper = shallow(<Projects/>);
        let result = wrapper.contains(checkAgainst)
        expect(result).toEqual(true);
    })

    it('The onSelectClick function is run once', async () => {
        const wrapper = shallow(<Projects/>);
        wrapper.instance().onSelectClick = jest.fn();
        expect(wrapper.contains(checkAgainst)).toBe(true);

        let {onSelectClick} = wrapper.instance();
        expect(onSelectClick).toHaveBeenCalledTimes(0);

        console.log(wrapper.debug());

        await wrapper.instance().componentDidMount();

        console.log(wrapper.debug());
        
        expect(wrapper.contains(checkAgainst)).toBe(false);
        expect(wrapper.contains("#5bf2ddc27507820c30274604>")).toBe(true)
        wrapper.find("#bf2ddc27507820c30274604").simulate('click');
        expect(onSelectClick).toHaveBeenCalledTimes(1);
    })
}
)

