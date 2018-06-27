'use strict';

import * as React from 'react';
import './provider.less';

export interface IEventHandler {
  (event: UIEvent, ref: React.RefObject<HTMLDivElement>): void;
}

export interface Context {
  addEventListener: (eventType: string, eventHandler: IEventHandler) => boolean;
  removeEventListener: (eventType: string, eventHandler: IEventHandler) => boolean;
}

const Context: Context =  {
	addEventListener: (eventType, eventHandler) => {
    console.error('Error: Cannot addEventListener no ProviderContext.Provider element in parents');
    return false;
  },
	removeEventListener: (eventType, eventHandler) => {
	  console.error('Error: Cannot removeEventListener no ProviderContext.Provider element in parents');
    return false;  
  },
}

export const ProviderContext = React.createContext(Context);

export interface IEventListener {
  eventType: string,
  eventHandler: IEventHandler;
}

export interface IProviderState {
  vaildEventTypes: string[];
  eventListeners: IEventListener[];
}

export class Provider extends React.Component<null, IProviderState> {
  constructor(props) {
    super(props);
    this.state = {
      vaildEventTypes: [
        'click',
        'scroll'
      ],
      eventListeners: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.addEventListener = this.addEventListener.bind(this);
    this.removeEventListener = this.removeEventListener.bind(this);
  }

  providerRef: React.RefObject<HTMLDivElement> = React.createRef();

  handleClick = event => {
    this.state.eventListeners.filter(listener => listener.eventType == 'click').forEach(listener => listener.eventHandler(event, this.providerRef));
  };

  handleScroll = event => {
    this.state.eventListeners.filter(listener => listener.eventType == 'scroll').forEach(listener => listener.eventHandler(event, this.providerRef));
  }

  addEventListener = (eventType: string, eventHandler: IEventHandler): boolean => {
    let added = true;
    this.setState((prevState) => {
      const { eventListeners, vaildEventTypes } = prevState;
      if (!vaildEventTypes.includes(eventType)) {
        added = false;
      }
      const index = eventListeners.findIndex( listener => {
        if ((listener.eventHandler === eventHandler) && (listener.eventType == eventType)) {
          return true;
        }
        return false;
      });
      if ( index != -1 ) {
        added = false;
      }
      if (added) {
        eventListeners.push({
          eventType: eventType,
          eventHandler: eventHandler
        });
      }
      return {eventListeners: eventListeners};
    });
    return added;
  }

  removeEventListener = (eventType: string, eventHandler: Function): boolean => {
    let deleted = true;
    this.setState((prevState, props) => {
      const { eventListeners, vaildEventTypes } = prevState;
      if (!vaildEventTypes.includes(eventType)) {
        deleted = false;
      }
      const index = eventListeners.findIndex(listener => listener.eventHandler === eventHandler);
      if (index != -1) {
        deleted = false;
      }
      if (deleted) {
        eventListeners.splice(index, 1);
      }
      return {eventListeners: eventListeners};
    });
    return deleted;
  }

  render() {
    const { addEventListener, removeEventListener, handleClick, handleScroll } = this;
		const context = {
			addEventListener: addEventListener,
			removeEventListener: removeEventListener,
    }
    
    return (
      <ProviderContext.Provider value={context}>
        <div className="provider" ref={this.providerRef} onClick={handleClick} onScroll={handleScroll} >
            {this.props.children}
        </div>
      </ProviderContext.Provider>
    );
  }
}

export default Provider 

export interface IProviderConsumerProps extends React.Component {

}

export interface IProviderConsumerState extends React.Component {

}

export const providerConsumer = (Component) => {

  class ProviderConsumer extends React.Component<IProviderConsumerProps, IProviderConsumerState> {
    constructor(props) {
      super(props);
    }

    render () {
      return (
        <ProviderContext.Consumer>
          {(context) => {

            return (
              <Component {...this.props} {...context} />
            )
          }}
        </ProviderContext.Consumer>
      );
    }
  }

  return ProviderConsumer;

}
//   <ProviderContext.Consumer>
//   {context => {
//     props = {
//       addEventListener: context.addEventListener,
//       removeEventListener: context.removeEventListener,
//       mockHandler: mockHandler
//     }

//     return (
//       <Inside {...props} />
//     );
//   }}
// </ProviderContext.Consumer>

// const withRouter = Component => {
//   const C = props => {
//     const { wrappedComponentRef, ...remainingProps } = props;
//     return (
//       <Route
//         children={routeComponentProps => (
//           <Component
//             {...remainingProps}
//             {...routeComponentProps}
//             ref={wrappedComponentRef}
//           />
//         )}
//       />
//     );
//   };

//   C.displayName = `withRouter(${Component.displayName || Component.name})`;
//   C.WrappedComponent = Component;
//   C.propTypes = {
//     wrappedComponentRef: PropTypes.func
//   };

//   return hoistStatics(C, Component);
// };

// export default withRouter;