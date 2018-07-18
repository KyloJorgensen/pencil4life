'use strict';

import * as React from 'react';
import { shallow } from 'enzyme';
import * as RichTextEditor from 'react-rte'
import { ProjectPageList, ProjectPageListProps } from './project-page-list';

const _defaultProps: ProjectPageListProps = {
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
    user: {
        signup: () => {},
          getUser: () => {},
          login: () => {},
          logout: () => {},
          updateUser: () => {},
          updatePassword: () => {},
          email: null,
          firstname: null,
          lastname: null,
          username: null,
          userAccess: false,
          admin: false,
    },
    limit: 20,
    discontinued: false,
};

describe('Render Project Page List', () => {
	it('matches the snapshot', () => {
		let wrapper = shallow(<ProjectPageList {..._defaultProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});