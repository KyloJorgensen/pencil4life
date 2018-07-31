'use strict';

import * as React from 'react';

export interface IUserContext extends UserWrapperMethods, IUserState{
}

const Context: IUserContext = {
  signup: () => {
    console.error('Error: Cannot signup no UserContext.Provider element in parents');
  },
  getUser: () => {
    console.error('Error: Cannot getUser no UserContext.Provider element in parents');
  },
  login: () => {
    console.error('Error: Cannot login no UserContext.Provider element in parents');
  },
  logout: () => {
    console.error('Error: Cannot logout no UserContext.Provider element in parents');
  },
  updateUser: () => {
    console.error('Error: Cannot updateUser no UserContext.Provider element in parents');
  },
  updatePassword: () => {
    console.error('Error: Cannot updatePassword no UserContext.Provider element in parents');
  },
  forgotPassword: () => {
    console.error('Error: Cannot forgotPassword no UserContext.Provider element in parents');
  },
  resetPassword: () => {
    console.error('Error: Cannot resetPassword no UserContext.Provider element in parents');
  },
  checkResetCode: () => {
    console.error('Error: Cannot checkResetCode no UserContext.Provider element in parents');
  },
  email: null,
  firstname: null,
  lastname: null,
  username: null,
  userAccess: false,
  admin: false,
};

export const UserContext = React.createContext(Context);

export interface SignupParams {
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
};

export interface UpdateUserParams {
  email?: string;
  username?: string;
  firstname?: string;
  lastname?: string;
}

export interface IUserProps {
  initialState?: IUserState;
}

export interface IUserState {
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  userAccess: boolean;
  admin: boolean;
}

export interface UserWrapperMethods {
  signup: (params: SignupParams, callback: (error) => void) => void;
  getUser: () => void;
  login: (username: string, password: string, callback: (error) => void) => void;
  logout: () => void;
  updateUser: (params: UpdateUserParams, callback: (error) => void) => void;
  updatePassword: (oldpassword: string, newpassword: string, callback: (error) => void) => void;
  forgotPassword: (email: string, callback: (error) => void) => void;
  resetPassword: (newpassword: string, userId: string, reset_code: string, callback: (error) => void) => void;
  checkResetCode: (userId: string, reset_code: string, callback: (error) => void) => void;
}

export class UserWrapper extends React.Component<IUserProps, IUserState> implements UserWrapperMethods {
  public static defaultProps: IUserProps = {
    initialState: {
      email: null,
      firstname: null,
      lastname: null,
      username: null,
      userAccess: false,
      admin: false,
    },
  }
  constructor(props) {
    super(props)
    this.state = this.props.initialState;
    this.signup = this.signup.bind(this);
    this.getUser = this.getUser.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
  }

  getUser() {
    const request = new Request('/api/user/', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
    });
    fetch(request)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        const error = new Error(response.statusText)
        error.message = JSON.stringify(response)
        throw error;
      }
    })
    .then((body: IUserContext) => {
      let user: IUserState = {
        email: body.email,
        username: body.username,
        userAccess: true,
        firstname: body.firstname,
        lastname: body.lastname,
        admin: body.admin,
      };
      this.setState(() => {
        return user;
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  signup(params, callback) {

    const payload: SignupParams = {
      email: params.email,
      username: params.username,
      firstname: params.firstname,
      lastname: params.lastname,
      password: params.password,
    }
    
    const request = new Request('/api/user/', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      body: JSON.stringify(payload),   
    });

    fetch(request)
    .then((response) => {
      return response.json();
    })
    .then((body: IUserContext) => {
      let user: IUserState = {
        email: body.email,
        username: body.username,
        userAccess: true,
        firstname: body.firstname,
        lastname: body.lastname,
        admin: body.admin,
      };
      this.setState(() => {
        return user;
      });
      callback(false);
    })
    .catch((error) => {
      callback(error);
      console.error(error);
    });
  }

  login(email, password, callback) {
    const payload = {
      email: email,
      password: password,
    }
    
    const request = new Request('/api/user/login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      body: JSON.stringify(payload),   
    });

    fetch(request)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        const error = new Error(response.statusText)
        error.message = JSON.stringify(response)
        throw error;
      }
    })
    .then((body: IUserContext) => {
      let user: IUserState = {
        email: body.email,
        username: body.username,
        userAccess: true,
        firstname: body.firstname,
        lastname: body.lastname,
        admin: body.admin,
      };
      this.setState(() => {
        return user;
      });
      callback(false);
    })
    .catch((error) => {
      callback(error);
      console.error(error);
    });
  }

  logout() {
    const request = new Request('/api/user/logout', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
    });

    fetch(request)
    .then((response) => {
      if (response.status == 200) {
        let user: IUserState = {
          email: null,
          username: null,
          userAccess: false,
          firstname: null,
          lastname: null,
          admin: false,
        };
        this.setState(() => {
          return user;
        });
      } else {
        console.log('logout failed');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  updateUser(params, callback) {
    let payload:UpdateUserParams = {};
    if ('email' in params) {payload.email = params.email}
    if ('username' in params) {payload.username = params.username}
    if ('firstname' in params) {payload.firstname = params.firstname}
    if ('lastname' in params) {payload.lastname = params.lastname}

    if (Object.keys(payload).length > 0) {
      const request = new Request('/api/user/', {
        method: 'PUT',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      fetch(request)
      .then((response) => {
        return response.json();
      })
      .then((body: IUserContext) => {  
        let user: IUserState = {
          email: body.email,
          username: body.username,
          userAccess: true,
          firstname: body.firstname,
          lastname: body.lastname,
          admin: body.admin,
        };

        this.setState(() => {
          return user;
        });
        callback(false);
      })
      .catch((error) => {
        callback(true);
        console.log(error);
      });
    }

  }

  updatePassword(oldpassword, newpassword, callback) {
    const payload = {
      oldpassword: oldpassword,
      newpassword: newpassword
    };
    if (Object.keys(payload).length > 0) {
      const request = new Request('/api/user/login', {
        method: 'PUT',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      fetch(request)
      .then((response) => {
        return response.json();
      })
      .then((body: IUserContext) => {  
        let user: IUserState = {
          email: body.email,
          username: body.username,
          userAccess: true,
          firstname: body.firstname,
          lastname: body.lastname,
          admin: body.admin,
        };

        this.setState(() => {
          return user;
        });
        callback(false);
      })
      .catch((error) => {
        callback(true);
        console.log(error);
      });
    }
  }
  
  forgotPassword(email, callback) {
    const payload = {
      email: email,
    };
    if (Object.keys(payload).length > 0) {
      const request = new Request('/api/user/forgotpassword', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      fetch(request)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        callback(true);
      })
      .catch((error) => {
        callback(false);
        console.log(error);
      });
    }
  }  
  
  resetPassword(newpassword, userId, reset_code, callback) {
    const payload = {
      newpassword: newpassword,
    };
    if (Object.keys(payload).length > 0) {
      const request = new Request(`/api/user/resetpassword/${userId}/${reset_code}`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      fetch(request)
      .then((response) => {
        return response.json();
      })
      .then((body:{
        vaild: boolean
      }) => {
        callback(!body.vaild);
      })
      .catch((error) => {
        callback(true);
        console.log(error);
      });
    }
  }

  checkResetCode(userId, reset_code, callback) {
    const request = new Request(`/api/user/resetpassword/${userId}/${reset_code}`, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    fetch(request)
    .then((response) => {
      console.log(response)
      return response.json();
    })
    .then((body:{
      vaild: boolean
    }) => {
      callback(body.vaild);
    })
    .catch((error) => {
      callback(false);
      console.log(error);
    });
  }

  render() {
    const {signup, getUser, login, logout, updateUser, updatePassword, forgotPassword, resetPassword, checkResetCode } = this;
    const { email, firstname, lastname, username, userAccess, admin } = this.state;
      const context: IUserContext = {
        email: email,
        firstname: firstname,
        lastname: lastname,
        username: username,
        userAccess: userAccess,
        admin: admin,
        signup: signup,
        getUser: getUser,
        login: login,
        logout: logout,
        updateUser: updateUser,
        updatePassword: updatePassword,
        forgotPassword: forgotPassword,
        resetPassword: resetPassword,
        checkResetCode: checkResetCode,
      }
      return (
          <UserContext.Provider value={context} >
              {this.props.children}
          </UserContext.Provider>
      );
  }
}


export default UserWrapper;

export interface userProviderOptions {
  props?: IUserProps;
}

export const userProvider = (Component, options?: userProviderOptions) => {
  class UserProvider extends React.Component<null, null> {
    render () {
      let userWrapperProps: IUserProps = {};
      if (options) {
        if ('props' in options) {
          userWrapperProps = options.props;
        }
      }
      return (
        <UserWrapper {...userWrapperProps}>
          <Component {...this.props} />  
        </UserWrapper>
      );
    }
  }
  
    return UserProvider;
}

export const userConsumer = (Component) => {
    class UserConsumer extends React.Component<any> {
    render () {
        return (
          <UserContext.Consumer>
            {(context) => {
  
              return (
                <Component {...this.props} {...{user: context}} />
              )
            }}
          </UserContext.Consumer>
        );
      }
    }
  
    return UserConsumer;
}