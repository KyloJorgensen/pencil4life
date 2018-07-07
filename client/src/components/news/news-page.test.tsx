'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NewsPage from './news-page';

let wrapper: ShallowWrapper;

describe('Render NewsPage', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(
			<NewsPage/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});