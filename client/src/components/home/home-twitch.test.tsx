'use strict';

import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import TwitchIFrame from './home-twitch';

let wrapper: ShallowWrapper;

describe('Render TwitchIFrame', () => {
    it('should match the snaphot', () => {
        wrapper = shallow(
            <TwitchIFrame/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
