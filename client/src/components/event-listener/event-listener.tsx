'use strict';

import * as React from 'react';
import './event-listener.less';

export type IEventType = 'click' | 'scroll' | 'resize';

export type IEventHandler = (event: UIEvent, ref: React.RefObject<HTMLDivElement>) => void;

export interface IEventListenerContext {
  addEventListener: (eventType: IEventType, eventHandler: IEventHandler) => boolean;
  removeEventListener: (eventType: IEventType, eventHandler: IEventHandler) => boolean;
}

const Context: IEventListenerContext =  {
	addEventListener: (eventType, eventHandler) => {
    console.error('Error: Cannot addEventListener no EventListenerContext.Provider element in parents');
    return false;
  },
	removeEventListener: (eventType, eventHandler) => {
	  console.error('Error: Cannot removeEventListener no EventListenerContext.Provider element in parents');
    return false;  
  },
}

export const EventListenerContext = React.createContext(Context);

export interface IEventListener {
  eventType: IEventType,
  eventHandler: IEventHandler;
}

export interface IEventListenerWrapperState {
  vaildEventTypes: IEventType[];
  eventListeners: IEventListener[];
}

export interface IEventListenerWrapperMethods {
  handleClick: (event: UIEvent) => void;
  handleScroll: (event: UIEvent) => void;
  handleResize: (event: UIEvent) => void;
  addEventListener: (eventType: IEventType, eventHandler: IEventHandler) => boolean;
  removeEventListener: (eventType: IEventType, eventHandler: IEventHandler) => boolean;
}

export class EventListenerWrapper extends React.Component<null, IEventListenerWrapperState> implements IEventListenerWrapperMethods {
  constructor(props) {
    super(props);
    this.state = {
      vaildEventTypes: [
        'click',
        'scroll',
        'resize'
      ],
      eventListeners: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.addEventListener = this.addEventListener.bind(this);
    this.removeEventListener = this.removeEventListener.bind(this);
  }

  eventRef: React.RefObject<HTMLDivElement> = React.createRef();

  handleClick(event) {
    this.state.eventListeners.filter(listener => listener.eventType == 'click').forEach(listener => listener.eventHandler(event, this.eventRef));
  };

  handleScroll(event) {
    this.state.eventListeners.filter(listener => listener.eventType == 'scroll').forEach(listener => listener.eventHandler(event, this.eventRef));
  }

  handleResize(event) {
    this.state.eventListeners.filter(listener => listener.eventType == 'resize').forEach(listener => listener.eventHandler(event, this.eventRef));
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  addEventListener(eventType, eventHandler) {
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

  removeEventListener(eventType, eventHandler) {
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
    const { addEventListener, removeEventListener, handleClick, handleScroll, handleResize } = this;
		const context = {
			addEventListener: addEventListener,
			removeEventListener: removeEventListener,
    }
    
    return (
      <EventListenerContext.Provider value={context}>
        <div className="eventlistener-provider" ref={this.eventRef} onClick={handleClick} onScroll={handleScroll} >
            {this.props.children}
        </div>
      </EventListenerContext.Provider>
    );
  }
}

export default EventListenerWrapper;


export const eventListenerProvider = (Component) => {
  class EventListenerProvider extends React.Component<null, null> {
  render () {
      return (
        <EventListenerWrapper>
          <Component {...this.props} />  
        </EventListenerWrapper>
      );
    }
  }

  return EventListenerProvider;
}

export const eventListenerConsumer = (Component) => {
  class EventListenerConsumer extends React.Component<null, null> {
    render () {
      return (
        <EventListenerContext.Consumer>
          {(context) => {

            return (
              <Component {...this.props} {...context} />
            )
          }}
        </EventListenerContext.Consumer>
      );
    }
  }

  return EventListenerConsumer;
}