'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import HomeNews from './home-news';

let wrapper: ShallowWrapper;

describe('Render HomeNews', () => {
    it('should match the snaphot', () => {
        wrapper = shallow(
            <HomeNews/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
