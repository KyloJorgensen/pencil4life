'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import HomePage from './homepage';

let wrapper: ShallowWrapper;

describe('Render HomePage', () => {
    it('should match the snaphot', () => {
        wrapper = shallow(
            <HomePage/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
