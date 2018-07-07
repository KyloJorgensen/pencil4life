'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NewsListItem from './news-list-item';

let wrapper: ShallowWrapper;

describe('Render NewsListItem', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(
			<NewsListItem/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});