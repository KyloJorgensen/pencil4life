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
			<div>
				<EventContext.Consumer>
					{context => {
						return (
							<p></p>
						);
					}}
				</EventContext.Consumer>
			</div>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should have a p', () => {
		wrapper = mount(
			<div>
				<EventContext.Consumer>
					{context => {
						return (
							<p></p>
						);
					}}
				</EventContext.Consumer>
			</div>
		);
		const child = wrapper.find('p');
		expect(child.length).toEqual(1);
	});

	it('should have a p that contains "child"', () => {
		wrapper = mount(
			<div>
				<EventContext.Consumer>
					{context => {
						return (
							<p>child</p>
						);
					}}
				</EventContext.Consumer>
			</div>
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
});	

describe('evntConsumer with item id passed as prop', () => {
	beforeEach(() => {
		interface ItemProps {
			event: IEventContext;
		}

		class Item extends React.Component<ItemProps> {
			render() {
				return (
					<div>
						<p className="_eventItemId" >{this.props.event.eventItem._eventItemId}</p>
						<p className="title">{this.props.event.eventItem.title}</p>
						<p className="start_date">{this.props.event.eventItem.start_date}</p>
						<p className="end_date">{this.props.event.eventItem.end_date}</p>
						<p className="details">{this.props.event.eventItem.details}</p>
						<p className="createdUpdatedDateTime">{this.props.event.eventItem.createdUpdatedDateTime}</p>
						<p className="discontinued">{this.props.event.eventItem.discontinued? "true" : "false"}</p>
					</div>
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
							_eventItemId: "12345",
							title: 'blah',
							start_date: '0',
							end_date: '1',
							details: 'stuff',
							createdUpdatedDateTime: 'date',
							discontinued: false,
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
	});

	it('should pass the id along', () => {
		expect(wrapper.find('p._eventItemId').text()).toEqual('12345');			
	})
	it('should pass the id along', () => {
		expect(wrapper.find('p.title').text()).toEqual('blah');			
	})
	it('should pass the id along', () => {
		expect(wrapper.find('p.start_date').text()).toEqual('0');			
	})
	it('should pass the id along', () => {
		expect(wrapper.find('p.end_date').text()).toEqual('1');			
	})
	it('should pass the id along', () => {
		expect(wrapper.find('p.details').text()).toEqual('stuff');			
	})
	it('should pass the id along', () => {
		expect(wrapper.find('p.createdUpdatedDateTime').text()).toEqual('date');			
	})
	it('should pass the id along', () => {
		expect(wrapper.find('p.discontinued').text()).toEqual('false');			
	})
});