'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import HomeEvent from './home-event';

let wrapper: ShallowWrapper;

describe('Render HomeEvent', () => {
    it('should match the snaphot', () => {
        wrapper = shallow(
            <HomeEvent/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
