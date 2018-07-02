'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import LoginPage from './login-page';

let wrapper: ShallowWrapper;

describe('Render LoginPage', () => {
    it('should match the snaphot', () => {
        wrapper = shallow(
            <LoginPage/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
