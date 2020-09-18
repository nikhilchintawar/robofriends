import { shallow } from 'enzyme';
import React from 'react';

import ErrorBoundry from './ErrorBoundry';

it('testig error boundry', () => {
    expect(shallow(<ErrorBoundry />)).toMatchSnapshot()
})