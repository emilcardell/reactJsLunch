import React from 'react';
import { render } from 'react-dom';

const App = React.createClass({
    render() {
        return (<div>Application loaded!<SubApp /></div>);
    }
});

render((<App />), document.getElementById('appHere'));
