'use strict';

import * as React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import * as fetch from 'jest-fetch-mock';
import { UserContext, userProvider, userConsumer, UserWrapper, Context, UpdateUserParams } from './user-provider';

let wrapper: ShallowWrapper | ReactWrapper;

class Elem extends React.Component {
	render() {
		return (
			<p></p>
		)
	}
}

const methodTest = (methodTest) => {
    interface MethodTestProps {
        user: Context;
    }
    class MethodTest extends React.Component<MethodTestProps> {
        constructor(props) {
            super(props);
        }
        componentDidMount() {
            methodTest(this.props.user);
        }
        render() {
            const { email, firstname, lastname, username, userAccess, admin } = this.props.user;
            return (
                <div>
                    <p className="email">{email}</p> 
                    <p className="username">{username}</p>   
                    <p className="firstname">{firstname}</p>    
                    <p className="lastname">{lastname}</p>    
                    <p className="userAccess">{userAccess ? 'true' : 'false' }</p>       
                    <p className="admin">{admin ? 'true' : 'false' }</p>    
                </div>
            );
        }
    }
    return MethodTest;
}
describe('User-Provider', () => {
    beforeAll(() => {
        fetch.resetMocks()
    })

    describe('Render UserConext.Consumer', () => {
        it('should match the snaphot', () => {
            wrapper = mount(
                <UserContext.Consumer>
                    {context => {
                        return (
                            <p>a</p>
                        );
                    }}
                </UserContext.Consumer>
            );
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('Render UserWrapper', () => {
        it('matches the snapshot', () => {
            wrapper = shallow(<UserWrapper />);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('Render userProvider', () => {
        it('matches the snapshot', () => {
            const UP = userProvider(Elem);
            wrapper = shallow(<UP />);
            expect(wrapper).toMatchSnapshot();
        });
        
        it('should contain User Wrapper ', () => {
            const UP = userProvider(Elem);
            wrapper = mount(
                <UP />
            );

            const conatins = wrapper.contains(
                <UserWrapper>
                    <Elem />
                </UserWrapper>
            );

            expect(conatins).toEqual(true);
        });
    });

    describe('Render userConsumer', () => {
        it('matches the snapshot', () => {
            const UC = userConsumer(Elem);
            wrapper = shallow(<UC />);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('signup', () => {
        const UP = userProvider(userConsumer(methodTest((user: Context) => {user.signup({
            email: 'test@example.com',
            username: 'coolguy123',
            firstname: 'Joe',
            lastname: 'Doe',
            password: 'password',
        })})));

        const body = JSON.stringify({
            email: 'test@example.com',
            username: 'coolguy123',
            firstname: 'Joe',
            lastname: 'Doe',
            admin: false,
        });

        beforeEach(() => {
            fetch.resetMocks()
            fetch.mockResponses(
                // [ JSON.stringify({}), { status: 200 }],
                [ body, { status: 200 }],
            );
            wrapper = mount(<UP />);
        });

        it('should give a email', () => {
            expect(wrapper.find('p.email').text()).toEqual('test@example.com');
        });
        
        it('should give a username', () => {
            expect(wrapper.find('p.username').text()).toEqual('coolguy123');
        });
        
        it('should give a firstname', () => {
            expect(wrapper.find('p.firstname').text()).toEqual('Joe');
        });
        
        it('should give a lastname', () => {
            expect(wrapper.find('p.lastname').text()).toEqual('Doe');
        });
        
        it('should give a userAccess', () => {
            expect(wrapper.find('p.userAccess').text()).toEqual('true');
        });
        
        it('should give a admin', () => {
            expect(wrapper.find('p.admin').text()).toEqual('false');
        });
    });

    describe('getUser', () => {
        const UP = userProvider(userConsumer(methodTest((user: Context) => {user.getUser()})));

        const body = JSON.stringify({
            email: 'test@example.com',
            username: 'coolguy123',
            firstname: 'Joe',
            lastname: 'Doe',
            admin: false,
        });

        beforeEach(() => {
            fetch.resetMocks()
            fetch.once(body);
            wrapper = mount(<UP />);
        });

        it('should give a email', () => {
            expect(wrapper.find('p.email').text()).toEqual('test@example.com');
        });
        
        it('should give a username', () => {
            expect(wrapper.find('p.username').text()).toEqual('coolguy123');
        });
        
        it('should give a firstname', () => {
            expect(wrapper.find('p.firstname').text()).toEqual('Joe');
        });
        
        it('should give a lastname', () => {
            expect(wrapper.find('p.lastname').text()).toEqual('Doe');
        });
        
        it('should give a userAccess', () => {
            expect(wrapper.find('p.userAccess').text()).toEqual('true');
        });
        
        it('should give a admin', () => {
            expect(wrapper.find('p.admin').text()).toEqual('false');
        });
    });

    describe('login', () => {
        const UP = userProvider(userConsumer(methodTest((user: Context) => {user.login('coolguy', 'password')})));

        const body = JSON.stringify({
            email: 'test@example.com',
            username: 'coolguy123',
            firstname: 'Joe',
            lastname: 'Doe',
            admin: false,
        });

        beforeEach(() => {
            fetch.resetMocks()
            fetch.mockResponses(
                // [ JSON.stringify({}), { status: 200 }],
                [ body, { status: 200 }],
            );
            wrapper = mount(<UP />);
        });

        it('should give a email', () => {
            expect(wrapper.find('p.email').text()).toEqual('test@example.com');
        });
        
        it('should give a username', () => {
            expect(wrapper.find('p.username').text()).toEqual('coolguy123');
        });
        
        it('should give a firstname', () => {
            expect(wrapper.find('p.firstname').text()).toEqual('Joe');
        });
        
        it('should give a lastname', () => {
            expect(wrapper.find('p.lastname').text()).toEqual('Doe');
        });
        
        it('should give a userAccess', () => {
            expect(wrapper.find('p.userAccess').text()).toEqual('true');
        });
        
        it('should give a admin', () => {
            expect(wrapper.find('p.admin').text()).toEqual('false');
        });
    });

    describe('logout', () => {
        const UP = userProvider(userConsumer(methodTest((user: Context) => {user.logout()})),{
            props: {
                initialState: {
                    email: 'test@example.com',
                    username: 'coolguy123',
                    firstname: 'Joe',
                    lastname: 'Doe',
                    userAccess: true,
                    admin: false,
                },
            },
        });

        const body = JSON.stringify({
        });

        beforeEach(() => {
            fetch.resetMocks()
            fetch.mockResponses(
                [ JSON.stringify({}), { status: 200 }],
                // [ body, { status: 200 }],
            );
            wrapper = mount(<UP />);
        });

        it('should give a email', () => {
            expect(wrapper.find('p.email').text()).toEqual('');
        });
        
        it('should give a username', () => {
            expect(wrapper.find('p.username').text()).toEqual('');
        });
        
        it('should give a firstname', () => {
            expect(wrapper.find('p.firstname').text()).toEqual('');
        });
        
        it('should give a lastname', () => {
            expect(wrapper.find('p.lastname').text()).toEqual('');
        });
        
        it('should give a userAccess', () => {
            expect(wrapper.find('p.userAccess').text()).toEqual('false');
        });
        
        it('should give a admin', () => {
            expect(wrapper.find('p.admin').text()).toEqual('false');
        });
    });

    describe('updateUser', () => {
        const params: UpdateUserParams = {
            email: 'test2@gamil.com',
            username: 'coolestguy123',
            firstname: 'Joesph',
            lastname: 'Smith',
        }
        const UP = userProvider(userConsumer(methodTest((user: Context) => {user.updateUser(params)})));


        const body = JSON.stringify({
            email: 'test2@example.com',
            username: 'coolestguy123',
            firstname: 'Joesph',
            lastname: 'Smith',
            admin: false,
        });

        beforeEach(() => {
            fetch.resetMocks()
            fetch.mockResponses(
                [ body, { status: 200 }],
            );
            wrapper = mount(<UP />);
        });

        it('should give a email', () => {
            expect(wrapper.find('p.email').text()).toEqual('test2@example.com');
        });
        
        it('should give a username', () => {
            expect(wrapper.find('p.username').text()).toEqual('coolestguy123');
        });
        
        it('should give a firstname', () => {
            expect(wrapper.find('p.firstname').text()).toEqual('Joesph');
        });
        
        it('should give a lastname', () => {
            expect(wrapper.find('p.lastname').text()).toEqual('Smith');
        });
        
        it('should give a userAccess', () => {
            expect(wrapper.find('p.userAccess').text()).toEqual('true');
        });
        
        it('should give a admin', () => {
            expect(wrapper.find('p.admin').text()).toEqual('false');
        });
    });
});
