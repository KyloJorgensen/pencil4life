'use strict';

import * as React from 'react';

class NoMatch extends React.Component {
    render() {        
        return (
            <div className="no-match-page-wrapper" >
                <div className="container">
                    <h1>Page Not Found</h1>
                </div>
            </div>
        );
    }
};

export default NoMatch;