'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NewsItemEdit from './news-item-edit';

let wrapper: ShallowWrapper;

describe('Render NewsItemEdit', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(
			<NewsItemEdit/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});