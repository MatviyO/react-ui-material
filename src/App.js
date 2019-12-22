import React, {Component} from 'react';
import './App.css';
import {AppHeader} from './components/header';
import {AppDrawer} from "./components/drawer";

export default class App extends Component {
    constructor(probs)
    {

        super(probs)
        this.state = {
            isDrawerOpen: false
        }
    }
    render() {
    return (
        <div className="App" >
            <AppHeader
                onLeftIconClick={() => this.setState({isDrawerOpen: true})}
            />
            <AppDrawer  open={this.state.isDrawerOpen}
                       onToggle={(isDrawerOpen) => this.setState({isDrawerOpen: false})}
            />
        </div>
    );
}


}

