'use strict';

import * as React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import { Provider, ProviderContext} from './provider';

let wrapper: ShallowWrapper | ReactWrapper;

describe('Render ProviderContext', () => {
	it('matches the snapshot', () => {
		wrapper = mount(
			<ProviderContext.Consumer>
				{context => {
					return (
						<p></p>
					);
				}}
			</ProviderContext.Consumer>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should have a p', () => {
		wrapper = mount(
			<ProviderContext.Consumer>
				{context => {
					return (
						<p></p>
					);
				}}
			</ProviderContext.Consumer>
		);
		const child = wrapper.find('p');
		expect(child.length).toEqual(1);
	});

	it('should have a p that contains "child"', () => {
		wrapper = mount(
			<ProviderContext.Consumer>
				{context => {
					return (
						<p>child</p>
					);
				}}
			</ProviderContext.Consumer>
		);
		const child = wrapper.find('p').contains('child');
		expect(child).toEqual(true);
	});
});

describe('Render Provider component', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(<Provider />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should have a p', () => {
		wrapper = shallow(
			<Provider>
				<p>child</p>
			</Provider>
		);
		const child = wrapper.find('p');
		expect(child.length).toEqual(1);
	});

	it('should have a p that contains "child"', () => {
		wrapper = shallow(
			<Provider>
				<p>child</p>
			</Provider>
		);
		const child = wrapper.find('p').contains('child');
		expect(child).toEqual(true);
	});
});

describe('interaction', () => {
	let uniqueNumber = 0;
	let getUniqueNumber = ():number => {
		uniqueNumber++;
		return uniqueNumber;
	};


	interface IInsideProps {
		addEventListener:Provider["addEventListener"];
		removeEventListener:Provider["removeEventListener"];
		mockHandler: Function;
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
			this.props.addEventListener('click', this.state.uniqueNumber + 'uniqueTag', this.props.mockHandler);
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

	it('should add event listener', () => {
		const mockHandler = jest.fn(() => {});
 		wrapper = mount(
			<Provider>
				<ProviderContext.Consumer>
					{context => {
						const props = {
							addEventListener: context.addEventListener,
							removeEventListener: context.removeEventListener,
							mockHandler: mockHandler
						}

						return (
							<Inside {...props} />
						);
					}}
				</ProviderContext.Consumer>
			</Provider>
		);

		wrapper.find('p').simulate('click');
		expect(mockHandler.mock.calls.length).toEqual(1);
	});

	it('should remove event listener', () => {
		const mockHandler = jest.fn(() => {});
		let props;
 		wrapper = mount(
			<Provider>
				<ProviderContext.Consumer>
					{context => {
						props = {
							addEventListener: context.addEventListener,
							removeEventListener: context.removeEventListener,
							mockHandler: mockHandler
						}

						return (
							<Inside {...props} />
						);
					}}
				</ProviderContext.Consumer>
			</Provider>
		);
		props.removeEventListener('click', '1uniqueTag');
		wrapper.find('p').simulate('click');
		expect(mockHandler.mock.calls.length).toEqual(0);
	});

	it('should not trigger on the outside', () => {
		const mockHandler = jest.fn(() => {});
 		wrapper = mount(
			<main>
				<Provider>
					<ProviderContext.Consumer>
						{context => {
							const props = {
								addEventListener: context.addEventListener,
								removeEventListener: context.removeEventListener,
								mockHandler: mockHandler
							}

							return (
								<Inside {...props} />
							);
						}}
					</ProviderContext.Consumer>
				</Provider>
			</main>
		);

		wrapper.find('main').simulate('click');
		expect(mockHandler.mock.calls.length).toEqual(0);
	});

	it('should trigger all "click" events on click', () => {
		const mockHandler = jest.fn(() => {});
 		wrapper = mount(
			<Provider>
				<ProviderContext.Consumer>
					{context => {
						const props = {
							addEventListener: context.addEventListener,
							removeEventListener: context.removeEventListener,
							mockHandler: mockHandler
						}

						return (
							<Inside {...props} />
						);
					}}
				</ProviderContext.Consumer>
				<ProviderContext.Consumer>
					{context => {
						const props = {
							addEventListener: context.addEventListener,
							removeEventListener: context.removeEventListener,
							mockHandler: mockHandler
						}

						return (
							<Inside {...props} />
						);
					}}
				</ProviderContext.Consumer>
				<ProviderContext.Consumer>
					{context => {
						const props = {
							addEventListener: context.addEventListener,
							removeEventListener: context.removeEventListener,
							mockHandler: mockHandler
						}

						return (
							<Inside {...props} />
						);
					}}
				</ProviderContext.Consumer>
			</Provider>
		);

		wrapper.find('p').first().simulate('click');
		expect(mockHandler.mock.calls.length).toEqual(3);
	});
});