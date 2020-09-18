import { shallow } from 'enzyme';
import React from 'react';

import CardList from "./CardList";

const filteredRobots = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }]

test('test to render card list component.', () => {
    expect(shallow(<CardList robots={filteredRobots} />)).toMatchSnapshot()
})