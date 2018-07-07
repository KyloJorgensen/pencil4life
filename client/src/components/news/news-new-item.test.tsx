'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NewsNewItem from './news-new-item';

let wrapper: ShallowWrapper;

describe('Render NewsNewItem', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(
			<NewsNewItem/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});