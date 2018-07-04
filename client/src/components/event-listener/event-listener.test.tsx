'use strict';

import * as React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import { EventListenerWrapper, EventListenerContext, IEventHandler, eventListenerProvider, eventListenerConsumer } from './event-listener';

let wrapper: ShallowWrapper | ReactWrapper;

class Elem extends React.Component<null, null> {
	render() {
		return (
			<p></p>
		)
	}
}

describe('Render EventListenerContext', () => {
	it('matches the snapshot', () => {
		wrapper = mount(
			<EventListenerContext.Consumer>
				{context => {
					return (
						<p></p>
					);
				}}
			</EventListenerContext.Consumer>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should have a p', () => {
		wrapper = mount(
			<EventListenerContext.Consumer>
				{context => {
					return (
						<p></p>
					);
				}}
			</EventListenerContext.Consumer>
		);
		const child = wrapper.find('p');
		expect(child.length).toEqual(1);
	});

	it('should have a p that contains "child"', () => {
		wrapper = mount(
			<EventListenerContext.Consumer>
				{context => {
					return (
						<p>child</p>
					);
				}}
			</EventListenerContext.Consumer>
		);
		const child = wrapper.find('p').contains('child');
		expect(child).toEqual(true);
	});
});

describe('Render Event component', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(<EventListenerWrapper />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should have a p', () => {
		wrapper = shallow(
			<EventListenerWrapper>
				<p>child</p>
			</EventListenerWrapper>
		);
		const child = wrapper.find('p');
		expect(child.length).toEqual(1);
	});

	it('should have a p that contains "child"', () => {
		wrapper = shallow(
			<EventListenerWrapper>
				<p>child</p>
			</EventListenerWrapper>
		);
		const child = wrapper.find('p').contains('child');
		expect(child).toEqual(true);
	});
});

describe('Render eventListenerProvider', () => {
	it('matches the snapshot', () => {
		const EP = eventListenerProvider(Elem);
		wrapper = shallow(<EP />);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('Render eventListenerConsumer', () => {
	it('matches the snapshot', () => {
		const EC = eventListenerConsumer(Elem);
		wrapper = shallow(<EC />);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('interaction', () => {
	let uniqueNumber = 0;
	let getUniqueNumber = ():number => {
		uniqueNumber++;
		return uniqueNumber;
	};

	interface IUnmountState {
		mount: boolean;
	}
	
	class Unmount extends React.Component<null, IUnmountState> {
		constructor(props) {
			super(props);
			this.state = {
				mount: true,
			}
			this.handleClick = this.handleClick.bind(this);
			this.handleScroll = this.handleScroll.bind(this);
		}

		handleClick(event) {
			this.setState((prevState) => {
				return {mount: !prevState.mount};
			});
		}

		handleScroll(event) {
			this.setState((prevState) => {
				return {mount: !prevState.mount};
			});
		}

		render() {
			return (
				<div>
					<button className="unmount" onClick={this.handleClick} onScroll={this.handleScroll} ></button>
					<div>{this.state.mount ? this.props.children : ''}</div>
				</div>
			);
		}
	}


	interface IInsideProps {
		addEventListener: EventListenerWrapper["addEventListener"];
		removeEventListener: EventListenerWrapper["removeEventListener"];
		clickHandler: IEventHandler;
		scrollHandler: IEventHandler;
	}	
	interface IInsideState {
		uniqueNumber: number;
	}
	class Inside extends React.Component<IInsideProps, IInsideState> {
		constructor(props) {
			super(props)
			this.state = {
				uniqueNumber: getUniqueNumber()
			}
		}

		componentDidMount() {
			this.props.addEventListener('click', this.props.clickHandler);
			this.props.addEventListener('scroll', this.props.scrollHandler);
		}

		componentWillUnmount() {
			this.props.removeEventListener('click', this.props.clickHandler);
			this.props.removeEventListener('scroll', this.props.scrollHandler);
		}

		render() {
			return (
				<p></p>
			);
		}
	}
	beforeEach(() => {
		uniqueNumber = 0;
	});

	it('should add onClick event listener', () => {
		const mockHandler = jest.fn(() => {});
 		wrapper = mount(
			<EventListenerWrapper>
				<EventListenerContext.Consumer>
					{context => {
						const props = {
							addEventListener: context.addEventListener,
							removeEventListener: context.removeEventListener,
							clickHandler: mockHandler,
							scrollHandler: () => {},
						}

						return (
							<Inside {...props} />
						);
					}}
				</EventListenerContext.Consumer>
			</EventListenerWrapper>
		);

		

		wrapper.find('p').simulate('click');
		expect(mockHandler.mock.calls.length).toEqual(1);
	});

	it('should remove onClick event listener', () => {
		const mockHandler = jest.fn(() => {});
		let props;
 		wrapper = mount(
			<EventListenerWrapper>
				<EventListenerContext.Consumer>
					{context => {
						props = {
							addEventListener: context.addEventListener,
							removeEventListener: context.removeEventListener,
							clickHandler: () => {
								mockHandler();
							},
							scrollHandler: () => {},
						}

						return (
							<Unmount>
								<Inside {...props} />
							</Unmount>
						);
					}}
				</EventListenerContext.Consumer>
			</EventListenerWrapper>
		);
		wrapper.find('button.unmount').simulate('scroll');
		wrapper.find('div').first().simulate('click');
		expect(mockHandler.mock.calls.length).toEqual(0);
	});

	it('should not trigger click on the outside', () => {
		const mockHandler = jest.fn(() => {});
 		wrapper = mount(
			<main>
				<EventListenerWrapper>
					<EventListenerContext.Consumer>
						{context => {
							const props = {
								addEventListener: context.addEventListener,
								removeEventListener: context.removeEventListener,
								clickHandler: mockHandler,
								scrollHandler: () => {},
							}

							return (
								<Inside {...props} />
							);
						}}
					</EventListenerContext.Consumer>
				</EventListenerWrapper>
			</main>
		);

		wrapper.find('main').simulate('click');
		expect(mockHandler.mock.calls.length).toEqual(0);
	});

	it('should trigger all "click" events on click', () => {
		const mockHandler1 = jest.fn(() => {});
		const mockHandler2 = jest.fn(() => {});
		const mockHandler3 = jest.fn(() => {});
 		wrapper = mount(
			<EventListenerWrapper>
				<EventListenerContext.Consumer>
					{context => {
						const props = {
							addEventListener: context.addEventListener,
							removeEventListener: context.removeEventListener,
							clickHandler: mockHandler1,
							scrollHandler: () => {},
						}

						return (
							<Inside {...props} />
						);
					}}
				</EventListenerContext.Consumer>
				<EventListenerContext.Consumer>
					{context => {
						const props = {
							addEventListener: context.addEventListener,
							removeEventListener: context.removeEventListener,
							clickHandler: mockHandler2,
							scrollHandler: () => {},
						}

						return (
							<Inside {...props} />
						);
					}}
				</EventListenerContext.Consumer>
				<EventListenerContext.Consumer>
					{context => {
						const props = {
							addEventListener: context.addEventListener,
							removeEventListener: context.removeEventListener,
							clickHandler: mockHandler3,
							scrollHandler: () => {},
						}

						return (
							<Inside {...props} />
						);
					}}
				</EventListenerContext.Consumer>
			</EventListenerWrapper>
		);

		wrapper.find('p').first().simulate('click');
		expect(mockHandler1.mock.calls.length).toEqual(1);
		expect(mockHandler2.mock.calls.length).toEqual(1);
		expect(mockHandler3.mock.calls.length).toEqual(1);
	});

	it('should add On Scroll event listener', () => {
		const mockHandler = jest.fn(() => {});
 		wrapper = mount(
			<EventListenerWrapper>
				<EventListenerContext.Consumer>
					{context => {
						const props = {
							addEventListener: context.addEventListener,
							removeEventListener: context.removeEventListener,
							clickHandler: () => {},
							scrollHandler: mockHandler,
						}

						return (
							<Inside {...props} />
						);
					}}
				</EventListenerContext.Consumer>
			</EventListenerWrapper>
		);

		wrapper.find('p').simulate('scroll');
		expect(mockHandler.mock.calls.length).toEqual(1);
	});

	it('should be same when using just the wrappper or EventProvider', () => {
		const EP = eventListenerProvider(Elem);
		wrapper = mount(
			<EP />
		);

		const conatins = wrapper.contains(
			<EventListenerWrapper>
				<Elem />
			</EventListenerWrapper>
		);

		expect(conatins).toEqual(true);
	});
});