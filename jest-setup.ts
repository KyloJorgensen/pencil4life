'use strict';

import 'jest';
import { configure } from 'enzyme';
// import * as Adapter from 'enzyme-adapter-react-16';
import * as Adapter from 'enzyme-react-adapter-future';

configure({adapter: new Adapter()});