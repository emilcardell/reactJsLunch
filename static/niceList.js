import React from 'react';

const NiceList = React.createClass({
    render(){
        let reactListOfName = [];
        this.props.listOfNames.forEach((name) => {
            reactListOfName.push((<div key={name}>{name}</div>))
        });

        return (<div>
            {reactListOfName}
        </div>)
    }
});

export default NiceList;
