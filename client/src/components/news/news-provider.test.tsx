'use strict';

import * as React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import * as fetch from 'jest-fetch-mock';
import { NewsContext, NewsWrapper, newsProvider, newsConsumer } from './news-provider';

let wrapper: ShallowWrapper | ReactWrapper;

class Elem extends React.Component {
	render() {
		return (
			<p></p>
		)
	}
}

describe('News-Provider', () => {
    beforeAll(() => {
        fetch.resetMocks()
    })

    describe('Render NewsContext.Consumer', () => {
        it('should match the snaphot', () => {
            wrapper = mount(
                <NewsContext.Consumer>
                    {context => {
                        return (
                            <p>a</p>
                        );
                    }}
                </NewsContext.Consumer>
            );
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('Render NewsWrapper', () => {
        it('matches the snapshot', () => {
            wrapper = shallow(<NewsWrapper />);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('Render newsProvider', () => {
        it('matches the snapshot', () => {
            const NP = newsProvider(Elem);
            wrapper = shallow(<NP />);
            expect(wrapper).toMatchSnapshot();
        });
        
        it('should contain News Wrapper ', () => {
            const NP = newsProvider(Elem);
            wrapper = mount(
                <NP />
            );

            const conatins = wrapper.contains(
                <NewsWrapper>
                    <Elem />
                </NewsWrapper>
            );

            expect(conatins).toEqual(true);
        });
    });

    describe('Render newsConsumer', () => {
        it('matches the snapshot', () => {
            const NC = newsConsumer(Elem);
            wrapper = shallow(<NC />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});