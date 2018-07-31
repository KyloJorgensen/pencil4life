'use strict';
import { User, IUserModel, IUser } from './user.model';
import * as bcrypt from 'bcryptjs';
import { submitMessage } from '../../../utilities/wduckApi';
import { NM_NOREPLY_EMAIL } from '../../../config/variables.express';
import { Request, Response, NextFunction } from 'express';
import { resetPasswordEmailTemplate, invaildResetPasswordEmailTemplate } from './user-email-templates';

const sendUser = (req: Request, res: Response, user: IUserModel):void => {
    req.session._userId = user._id;

    if (user.admin) {
        req.session._adminId = user._id;
    }

    res.status(200).json({
        email: user.email,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        admin: user.admin,
    });
}

// creates new user from email, password, and name. Attaches UserKey session.
export const createUser = (req: Request, res: Response, next: NextFunction) => {
    // generates the salt for bcrypt to encrypt the passwordz
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        // generates encrypted password
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }

            // creates user useing email, encrypted password (hash), name
            User.create({
                email: req.body.email,
                username: req.body.username,
                password: hash,
                firstname: req.body.firstname,
                lastname: req.body.lastname
            }).then((user) => {
                sendUser(req, res, user);
            }).catch((error) => {
                next(error);
            });
        });
    });
};

// one get returns users name
export const getUser = (req: Request, res: Response, next: NextFunction) => {
    User.findOne({
        _id: req.session._userId
    }).then((user) => {
        if (user) {
            sendUser(req, res, user);
        } else {
            let error = new Error('Not logged In.');
            error.name = 'LoginError';
            return next(error);
        }
    }).catch((error) => {
        next(error);
    });
};

// Attaches UserKey if username and password are vaild.
export const login = (req: Request, res: Response, next: NextFunction) => {
    let username:string = req.body.username;
    let password:string = req.body.password;
    User.findOne({username: username})
    .then((user) => {
        if (user == null) {
            let error = new Error('Invaild Username.');
            error.message = 'LoginError';
            throw error;
        }
        return user.validatePassword(password, user.password)
        .then((isVaild) => {
            if (isVaild) {
                return user;
            } else {
                return null;
            }
        });
    })
    .then((user) => {
        if (user) {
            sendUser(req, res, user);
        } else {
            let error = new Error('Invaild Password.');
            error.message = 'LoginError';
            return next(error);
        }
    })
    .catch((error) => {
        next(error);
    });
};

// Log user out
export const logout = (req: Request, res: Response, next: NextFunction)=> {
    req.session.regenerate((err) => {
        if (err) {
            return next(err);
        }
        res.status(200).end();
    });
};

export const updateUser = (req: Request, res: Response, next: NextFunction) => {
    let changes:IUserModel;
    if ('body' in req) {
        if ('email' in req.body) {
            changes.email = req.body.email;
        }
        if ('username' in req.body) {
            changes.username = req.body.username;
        }
        if ('firstname' in req.body) {
            changes.firstname = req.body.firstname;
        }
        if ('lastname' in req.body) {
            changes.lastname = req.body.lastname;
        }
    } else {
        let error = new Error('missing Body');
        error.name = 'BadRequest'
        return next(error);
    }   
    User.findOneAndUpdate({
        _id: req.session._userId
    }, {
        $set: changes
    }, {
        new: true
    })
    .then((user) => {
        sendUser(req, res, user);
    })
    .catch((error) => {
        next(error);
    });
};

export const updateUserPassword = (req: Request, res: Response, next: NextFunction) => {
    let oldpassword: string;
    let newpassword: string;
    if ('body' in req) {
        if ('oldpassword' in req.body) {
            oldpassword = req.body.oldpassword;
        }
        if ('newpassword' in req.body) {
            newpassword = req.body.newpassword;
        }
    } else {
        let error = new Error('missing Body');
        error.name = 'BadRequest'
        return next(error);
    }   
    User.findOne({
        _id: req.session._userId
    })
    .then((user) => {
        if (user == null) {
            let error = new Error('Invaild User.');
            error.name = 'LoginError';
            return next(error);
        }
        return user.validatePassword(oldpassword, user.password)
        .then((isVaild) => {
            if (isVaild) {
                return user;
            }
            return null;
        })
    })
    .then((user) => {
        if (user) {
            let changes: IUserModel;
            bcrypt.genSalt(10, (error, salt) => {
                if (error) {
                    throw(error);
                }
                // generates encrypted password
                bcrypt.hash(newpassword, salt, (error, hash) => {
                    if (error) {
                        throw error;
                    }
                    changes.password = hash;
                })
            });
            return changes;
        } else {
            let error = new Error('Invaild Password.');
            error.name = 'LoginError';
            throw error;
        }
    })
    .then((changes) => {
        return User.findOneAndUpdate({
            _id: req.session._userId
        }, {
            $set: changes
        }, {
            new: true
        })
    })
    .then((user) => {
        sendUser(req, res, user);
    })
    .catch((error) => {
        next(error);
    });
};

export const forgotPassword = (req: Request, res: Response, next: NextFunction) => {
    let email: string;
    if ('body' in req) {
        if ('email' in req.body) {
            email = req.body.email;
        } else {
            let error = new Error('missing email');
            error.name = 'BadRequest'
            return next(error);
        }
    } else {
        let error = new Error('missing Body');
        error.name = 'BadRequest'
        return next(error);
    }  

    User.findOne({email: email})
    .then((user) => {
        if (user == null) {
            const message = invaildResetPasswordEmailTemplate();
            return submitMessage({
                from: {
                    name: 'Pencil4Life',
                    address: NM_NOREPLY_EMAIL
                },
                to: [{
                    name: user.username, 
                    address: user.email,
                }],
                subject: 'Pencil4life Account Password Reset',
                html: message,
            })
        }
        const code = function() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          
            for (var i = 0; i < 64; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
          
            return text;
        }();

        const changes = {
            reset_code: {
                code: code,
                date: new Date(),
                used: false,
            }
        }
        //add a day to the date
        changes.reset_code.date.setDate(changes.reset_code.date.getDate() + 1);

        return User.findOneAndUpdate({
            email: email
        }, {
            $set: changes
        }, {
            new: true
        })
        
        .then((user) => {
            const message = resetPasswordEmailTemplate({
                userId: user._id,
                username: user.username,
                code: changes.reset_code.code
            })
            
            return submitMessage({
                from: {
                    name: 'Contacts Request',
                    address: NM_NOREPLY_EMAIL
                },
                to: [{
                    name: user.username, 
                    address: user.email,
                }],
                subject: 'Pencil4life Account Password Reset',
                html: message,
            })
        })
    })
    .then(() => {
        res.status(200).json({
            success: true
        });
    })
    .catch((error) => {
        next(error);
    });
};

export const check_reset_code = (userId: string, reset_code: string): Promise<IUserModel | boolean> => {
    return User.find({ _id: userId })
    .then((user) => {
        if (!user) {
            return false;
        }
        if (!user[0].reset_code) {
            return false;
        }
        console.log(user[0].reset_code)
        if (!user[0].reset_code.used &&
            user[0].reset_code.code == reset_code &&
            user[0].reset_code.date > new Date()) {
            return user[0];
        }
        return false;
    }).catch((error) => {
        // console.log(error)
        return false;
    })
}; 

export const checkResetCode = (req: Request, res: Response, next: NextFunction) => {
    const { userId, reset_code } = req.params;

    check_reset_code(userId, reset_code)
    .then((vaild) => {
        res.json({
            vaild: !!vaild,
        })
    })
    .catch((error) => {
        next(error);
    });
}; 

export const resetPassword = (req: Request, res: Response, next: NextFunction) => {
    const { userId, reset_code } = req.params;
    
    let newpassword: string;
    if ('body' in req) {
        if ('newpassword' in req.body) {
            newpassword = req.body.newpassword;
        } else {
            let error = new Error('missing newpassword');
            error.name = 'BadRequest'
            return next(error);
        }
    } else {
        let error = new Error('missing Body');
        error.name = 'BadRequest'
        return next(error);
    }  

    check_reset_code(userId, reset_code)
    .then((user: IUserModel | false) => {
        if (user) {
            return user;
        } else {
            res.json({
                vaild: false,
            });
        }
    })
    .then((user: IUserModel) => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (error, salt) => {
                if (error) {
                    reject(error);
                }
                // generates encrypted password
                bcrypt.hash(newpassword, salt, (error, hash) => {
                    if (error) {
                        reject(error);
                    }
                    console.log(hash)
                    resolve({
                        password: hash,
                        reset_code: {
                            code: user.reset_code.code,
                            date: user.reset_code.date,
                            used: true,
                        }
                    });
                })
            });
        });
    })
    .then((changes) => {
        return User.findOneAndUpdate({
            _id: userId,
        }, {
            $set: changes,
        }, {
            new: true,
        });
    })
    .then((user) => {
        console.log(user)
        res.json({
            vaild: true,
        });
    })   
    .catch((error) => {
        next(error);
    });
}; 