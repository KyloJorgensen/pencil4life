'use strict';

import * as React from 'react';
import { shallow } from 'enzyme';
import * as RichTextEditor from 'react-rte'
import { ProjectPageListItem, ProjectPageListItemProps } from './project-page-list-item';

const _defaultProps: ProjectPageListItemProps = {
    projectPage: {    
        getProjectPages: (params) => {},
        getProjectPage: (params) => {},
        addProjectPage: (params) => {},
        updateProjectPage: (params, callback) => {},
        projectPages: [],
        projectPageList: {},
        page: 0,
        totalPages: 0,
        limit: 0,
        total: 0,
        pageTotal: 0,
        projectPage: {
            _projectPageId: '',
            title: '',
            details: RichTextEditor.createEmptyValue().toString('html'),
            discontinued: false,
            _imageId: '',
            page: 0,
        }
    },
    _projectPageId: '',
};

describe('Render Project Page List Item', () => {
	it('matches the snapshot', () => {
		let wrapper = shallow(<ProjectPageListItem {..._defaultProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});