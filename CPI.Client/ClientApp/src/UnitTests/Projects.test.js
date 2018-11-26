import Projects from '../components/Projects';
import {shallow} from 'enzyme';

describe('Display Behavior', () => {
    beforeEach(()=> {
        
    })
    it('renders as a whole component', ()=>{
        expect(shallow(<Projects />).find('<span>Loading...</span>')).toExist()
    })
}
)

