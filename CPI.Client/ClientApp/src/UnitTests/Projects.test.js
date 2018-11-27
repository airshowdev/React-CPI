import React from 'react';
import {Projects} from '../components/Projects';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { doesNotReject } from 'assert';

configure({adapter: new Adapter()})

const checkAgainst = <span>Loading...</span>;
const checkAgainstButBad = <span>This ain't even loading, buddy</span>;

var component;

describe('Display Behavior', () => {

    beforeEach((done)=> {
        component = mount(<Projects/>);
        setTimeout(()=> {
            component.update();
            done();
        }, 3000)
    });
    it('test fails while renders as a whole component', (done)=>{
        const wrapper = component;
        let result = wrapper.contains(checkAgainstButBad)
        expect(result).toEqual(false);
    })

    it('renders as a whole component', (done)=>{
        const wrapper = component;
        let result = wrapper.contains(checkAgainst)
        expect(result).toEqual(true);
    })

    it('The onSelectClick function is run once', (done)=>{
        
        const wrapper = component;
        wrapper.instance().onSelectClick = jest.fn();

        wrapper.update();
        expect(wrapper.contains(checkAgainst)).toBe(false);
        let {onSelectClick} = wrapper.instance();
        expect(onSelectClick).toHaveBeenCalledTimes(0);
        expect(wrapper.contains("#5bf2ddc27507820c30274604")).toBe(true)
        wrapper.find("#bf2ddc27507820c30274604").simulate('click');
        expect(onSelectClick).toHaveBeenCalledTimes(1);
    })
}
)

