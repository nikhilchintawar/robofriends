import { shallow } from 'enzyme';
import React from 'react';


import SearchBox from './SearchBox';

it('testing search box.', () => {
    const mockSearchField = 'ervin';
    
    // wrapper
    expect(shallow(<SearchBox searchField={mockSearchField} />).find('[type="search"]').simulate('change'))
})
