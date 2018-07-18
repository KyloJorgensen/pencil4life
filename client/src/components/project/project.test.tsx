'use strict';

import * as React from 'react';
import { shallow } from 'enzyme';
import * as RichTextEditor from 'react-rte'
import { Project, ProjectProps } from './project';

const _defaultProps: ProjectProps = {
    project: {    
        getProjects: (params) => {},
        getProject: (params) => {},
        addProject: (params) => {},
        updateProject: (params, callback) => {},
        projects: [],
        projectList: {},
        page: 0,
        totalPages: 0,
        limit: 0,
        total: 0,
        pageTotal: 0,
        project: {
            _projectId: '',
            title: '',
            year: new Date(0),
            details: RichTextEditor.createEmptyValue().toString('html'),
            discontinued: false,
            coverImage: {
                _imageId: '',
            },
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
    }
};

describe('Render Project', () => {
	it('matches the snapshot', () => {
		let wrapper = shallow(<Project {..._defaultProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});