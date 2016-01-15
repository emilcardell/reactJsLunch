import React from 'react';
import { render } from 'react-dom';
import SubApp from 'subApp'

const App = React.createClass({
    render() {
        return (<div>Hello world!! <SubApp message="Hello Sub World!" /></div>);
    }
});

render((<App />), document.getElementById('appHere'));
