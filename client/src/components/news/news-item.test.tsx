'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NewsItem from './news-item';

let wrapper: ShallowWrapper;

describe('Render NewsItem', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(
			<NewsItem/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});