'use strict';

import * as React from 'react';
import { Email, Item, Span, Box, A, renderEmail, Image } from 'react-html-email';
import { NODE_ENV } from '../../../config/variables.express';

export interface ResetPasswordEmailTemplateParams {
    userId: string;
    username: string;
    code: string;
}

export const resetPasswordEmailTemplate = (params: ResetPasswordEmailTemplateParams) => renderEmail(
    <Email title="Pencil4life Password Reset">
        <Item>
            <Span fontSize={20}>
                Hello {params.username},
            </Span>
        </Item>
        <Item>
            <Span fontSize={12}>You recently requested to reset your password for your Pencil4Life Account. Use the button below to reset it.</Span>
            <Span fontWeight={'bold'}>This password reset is only vaild for the next 24 hours.</Span>
        </Item>
        <Item align="center">
            <Span fontSize={12}>
                <A href={`https://${NODE_ENV == 'development' ? 'dev' :'www'}.pencil4life.com/#/resetpassword/${params.userId}/${params.code}`}>Click Here</A> to reset your password.
            </Span>
        </Item>
    </Email>
);

export const invaildResetPasswordEmailTemplate = () => renderEmail(
    <Email title="Pencil4life Password Reset">
        <Item>
            <Span fontSize={20}>
                Hello Friend,
            </Span>
        </Item>
        <Item>
            <Span fontSize={12}>You recently requested to reset your password for your Pencil4Life Account. But we don't have any account using your email address.</Span>
        </Item>
        <Item align="center">
            <Span fontSize={12}>
                <A href={`https://${NODE_ENV == 'development' ? 'dev' :'www'}.pencil4life.com/#/signup`}>Click Here</A> to make an account.
            </Span>
        </Item>
    </Email>
);



// Documentation

// Components
// Components in react-html-email include defaults for basic style properties, so that client styles are reset and normalized. Every component accepts a style prop which overrides the reset styles.

// <Email>
// An HTML document with a centered 600px <table> inside <table> container based on HTML Email Boilerplate.

// It's necessary to always include a title prop for some clients' "open in browser" feature.

// See MailChimp's HTML guide for how this works.

// <Box>
// A simplification of the <table> element, the workhorse of an HTML email design. <Box>es contain a vertical stack of <Item>s. Use them to create visual structure, filled buttons, and spacing.

// <Item>
// A subsection of a <Box>, essentially a <tr><td> unit.

// <Span>
// Use to assign styles to text.

// It can be handy to create an object containing your default text styles for reuse. For example:

// const textStyles = {
//   fontFamily: 'Verdana',
//   fontSize: 42,
//   fontWeight: 'bold',
//   color: 'orange',
// }
 
// [...]
 
// <Span {...textDefaults}>Congratulations!</Span>
// <Span {...textDefaults}>You won a free cruise!</Span>
// <A>
// Use to format links. Requires an href prop. Always sets target="_blank" and defaults to underline. To remove the underline, set textDecoration="none".

// <Image>
// An image, without any pesky borders, outlines, or underlines by default. Requires a src prop, and width and height to be set. You can override the default styles (such as adding a border) using the style prop.

// Head CSS and Media Queries
// You can pass a string prop headCSS to your <Email> component. You can see it in our kitchenSink.js example.