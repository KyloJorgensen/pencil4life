'use strict';

import * as React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import { EventWrapper, EventContext, eventProvider, eventConsumer, eventProviderOptions, IEventContext } from './event-provider';

let wrapper: ShallowWrapper | ReactWrapper;

class Elem extends React.Component<null, null> {
	render() {
		return (
			<p></p>
		)
	}
}

describe('Render EventContext', () => {
	it('matches the snapshot', () => {
		wrapper = mount(
			<EventContext.Consumer>
				{context => {
					return (
						<p></p>
					);
				}}
			</EventContext.Consumer>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should have a p', () => {
		wrapper = mount(
			<EventContext.Consumer>
				{context => {
					return (
						<p></p>
					);
				}}
			</EventContext.Consumer>
		);
		const child = wrapper.find('p');
		expect(child.length).toEqual(1);
	});

	it('should have a p that contains "child"', () => {
		wrapper = mount(
			<EventContext.Consumer>
				{context => {
					return (
						<p>child</p>
					);
				}}
			</EventContext.Consumer>
		);
		const child = wrapper.find('p').contains('child');
		expect(child).toEqual(true);
	});
});

describe('Render Event component', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(<EventWrapper />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should have a p', () => {
		wrapper = shallow(
			<EventWrapper>
				<p>child</p>
			</EventWrapper>
		);
		const child = wrapper.find('p');
		expect(child.length).toEqual(1);
	});

	it('should have a p that contains "child"', () => {
		wrapper = shallow(
			<EventWrapper>
				<p>child</p>
			</EventWrapper>
		);
		const child = wrapper.find('p').contains('child');
		expect(child).toEqual(true);
	});
});

describe('Render eventProvider', () => {
	it('matches the snapshot', () => {
		const EP = eventProvider(Elem);
		wrapper = shallow(<EP />);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('Render eventConsumer', () => {
	it('matches the snapshot', () => {
		const EC = eventConsumer(Elem);
		wrapper = shallow(<EC />);
		expect(wrapper).toMatchSnapshot();
	});

	describe('with item id passed as prop', () => {
		it('should pass the id along', () => {

			interface ItemProps {
				event: IEventContext;
			}

			class Item extends React.Component<ItemProps> {
				render() {
					return (
						<p>{this.props.event.eventItem._eventItemId}</p>
					);
				}
			}

			const EC = eventConsumer(Item);

			class Test extends React.Component {
				render() {
					return (
						<EC _eventItemId={'12345'} />
					);
				}
			}

			const eventProvideroptions: eventProviderOptions = {
				props: {
					initialState: {
						eventItemList: {
							"12345": {
								_eventItemId: "12345"
							}
						},
						eventItems: ['12345'],
						limit: 10,
						page: 1,
						pageTotal: 1,
						total: 1,
						totalPages: 1,
					}
				}
			};


			const EP = eventProvider(Test, eventProvideroptions)

			wrapper = mount(<EP />);
			expect(wrapper.find('p').text()).toEqual('12345');

			expect(true).toEqual(false);
			
		})
		
	});
});