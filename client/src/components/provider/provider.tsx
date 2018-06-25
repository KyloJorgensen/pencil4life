'use strict';

import * as React from 'react';

export const ProviderContext = React.createContext({
	addEventListener: (eventType:string, uniqueTag: string, eventHandler: Function):boolean => {
    console.error('Error: Cannot addEventListener no ProviderContext.Provider element in parents');
    return false;
  },
	removeEventListener: (eventType:string, uniqueTag:string):boolean => {
	  console.error('Error: Cannot removeEventListener no ProviderContext.Provider element in parents');
    return false;  
  },
});

export interface IEventListener {
  eventType: string,
  uniqueTag: string;
  eventHandler: Function;
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
        'click'
      ],
      eventListeners: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.addEventListener = this.addEventListener.bind(this);
    this.removeEventListener = this.removeEventListener.bind(this);
  }

  handleClick = event => {
    this.state.eventListeners.filter(listner => listner.eventType == 'click').forEach(listener => listener.eventHandler(event));
  };

  addEventListener = (eventType:string, uniqueTag:string, eventHandler: Function):boolean => {
    let added = true;
    this.setState((prevState, props) => {
      const { eventListeners, vaildEventTypes } = prevState;

      if (!vaildEventTypes.includes(eventType)) {
        added = false;
      } else if ( eventListeners.filter(listener => listener.eventType == eventType).map(listener => listener.uniqueTag).includes(uniqueTag) ) {
        added = false;
      } else {
        eventListeners.push({
          eventType: eventType,
          uniqueTag: uniqueTag,
          eventHandler: eventHandler,
        })
      }
      return {eventListeners: eventListeners};
    });
    return added;
  }
  
	removeEventListener = (eventType:string, uniqueTag:string):boolean => {
    let deleted = true;
    this.setState((prevState, props) => {
      const { eventListeners } = prevState; 
      const index = eventListeners.findIndex(listener => listener.uniqueTag == uniqueTag && listener.eventType == eventType);
      if (index == -1) {
        deleted = false;
      } else {
        eventListeners.splice(index, 1);
      }
      return {eventListeners: eventListeners};
    });
    return deleted;
	}

  render() {
    const { addEventListener, removeEventListener, handleClick } = this;
		const context = {
			addEventListener: addEventListener,
			removeEventListener: removeEventListener,
    }
    
    return (
      <ProviderContext.Provider value={context}>
        <div onClick={handleClick}>
            {this.props.children}
        </div>
      </ProviderContext.Provider>
    );
  }
}

export default Provider 
