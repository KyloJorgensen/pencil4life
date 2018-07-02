'use strict';

import * as React from 'react';
import './event-listener.less';

export type IEventType = 'click' | 'scroll';

export interface IEventHandler {
  (event: UIEvent, ref: React.RefObject<HTMLDivElement>): void;
}

export interface Context {
  addEventListener: (eventType: IEventType, eventHandler: IEventHandler) => boolean;
  removeEventListener: (eventType: IEventType, eventHandler: IEventHandler) => boolean;
}

const Context: Context =  {
	addEventListener: (eventType, eventHandler) => {
    console.error('Error: Cannot addEventListener no EventContext.Provider element in parents');
    return false;
  },
	removeEventListener: (eventType, eventHandler) => {
	  console.error('Error: Cannot removeEventListener no EventContext.Provider element in parents');
    return false;  
  },
}

export const EventContext = React.createContext(Context);

export interface IEventListener {
  eventType: IEventType,
  eventHandler: IEventHandler;
}

export interface IEventWrapperState {
  vaildEventTypes: IEventType[];
  eventListeners: IEventListener[];
}

export interface IEventWrapperMethods {
  handleClick: (event: UIEvent) => void;
  handleScroll: (event: UIEvent) => void;
  addEventListener: (eventType: IEventType, eventHandler: IEventHandler) => boolean;
  removeEventListener: (eventType: IEventType, eventHandler: IEventHandler) => boolean;
}

export class EventWrapper extends React.Component<null, IEventWrapperState, IEventWrapperMethods> {
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

  eventRef: React.RefObject<HTMLDivElement> = React.createRef();

  handleClick(event) {
    this.state.eventListeners.filter(listener => listener.eventType == 'click').forEach(listener => listener.eventHandler(event, this.eventRef));
  };

  handleScroll(event) {
    this.state.eventListeners.filter(listener => listener.eventType == 'scroll').forEach(listener => listener.eventHandler(event, this.eventRef));
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
    const { addEventListener, removeEventListener, handleClick, handleScroll } = this;
		const context = {
			addEventListener: addEventListener,
			removeEventListener: removeEventListener,
    }
    
    return (
      <EventContext.Provider value={context}>
        <div className="event-provider" ref={this.eventRef} onClick={handleClick} onScroll={handleScroll} >
            {this.props.children}
        </div>
      </EventContext.Provider>
    );
  }
}

export default EventWrapper;


export const eventProvider = (Component) => {
  class EventProvider extends React.Component<null, null> {
  render () {
      return (
        <EventWrapper>
          <Component {...this.props} />  
        </EventWrapper>
      );
    }
  }

  return EventProvider;
}

export const eventConsumer = (Component) => {
  class EventConsumer extends React.Component<null, null> {
    render () {
      return (
        <EventContext.Consumer>
          {(context) => {

            return (
              <Component {...this.props} {...context} />
            )
          }}
        </EventContext.Consumer>
      );
    }
  }

  return EventConsumer;
}