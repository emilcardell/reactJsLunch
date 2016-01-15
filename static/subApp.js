import React from 'react';
import NiceList from 'niceList';

const SubApp = React.createClass({
    getInitialState(){
        return {
            message: 'Hello from state!',
            listOfNames: []
        }
    },
    whenIPushTheButton(evt) {
        let listOfNames = this.state.listOfNames;
        listOfNames.push(this.state.message);

        this.setState({
            listOfNames: listOfNames
        });
    },
    nameChanged(evt) {
        let name = evt.target.value;


        this.setState({
            message: name

        });
    },
    render() {



        return (<div>
            Sub Application loaded! {this.props.message} - {this.state.message}
            <div>
                <input type="text" ref="name" value={this.state.message} onChange={this.nameChanged}></input>
                <button onClick={this.whenIPushTheButton}>Push me!</button>

            </div>

            <NiceList listOfNames={this.state.listOfNames}></NiceList>

        </div>
        );
    }
});

export default SubApp;
