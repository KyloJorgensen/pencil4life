'use strict';

import { resetPasswordEmailTemplate, invaildResetPasswordEmailTemplate } from "./user-email-templates";

describe('Reset Password Email Template', () => {
    it('should match snapshot', () => {
        expect(resetPasswordEmailTemplate({
            userId: 'user_id',
            username: 'username',
            code: 'reset_code'
        })).toMatchSnapshot();
    });
});

describe('Invaild Reset Password Email Template', () => {
    it('should match snapshot', () => {
        expect(invaildResetPasswordEmailTemplate()).toMatchSnapshot();
    });
});