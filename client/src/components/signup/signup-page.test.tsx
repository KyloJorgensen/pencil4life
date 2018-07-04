'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SignupPage from './signup-page';

let wrapper: ShallowWrapper;

describe('Render SignupPage', () => {
    it('should match the snaphot', () => {
        wrapper = shallow(
            <SignupPage/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
