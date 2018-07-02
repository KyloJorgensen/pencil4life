'use strict';

import 'jest';
import * as fetch from 'jest-fetch-mock';
import { configure } from 'enzyme';
// import * as Adapter from 'enzyme-adapter-react-16';
import * as Adapter from 'enzyme-react-adapter-future';

export interface Global {
    fetch: typeof fetch;
}

declare var global: Global;
global.fetch = fetch; 

configure({adapter: new Adapter()});