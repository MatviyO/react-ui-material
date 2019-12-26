import React, {Component} from 'react';
import './App.css';
import {AppHeader} from './components/header';
import {AppDrawer} from "./components/drawer";
import {AppButtons} from "./components/button";
import {AppList} from "./components/list";

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrawerOpen: false,
            itemsList: [
                { name: 'Element 1', description: 'Description', checked: false},
                { name: 'Element 2', description: 'Description2', checked: false},
                { name: 'Element 3', description: 'Description3', checked: false}
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <AppHeader
                    onLeftIconClick={() => this.setState({isDrawerOpen: true})}
                />
                <AppDrawer open={this.state.isDrawerOpen}
                           onToggle={(isDrawerOpen) => this.setState({isDrawerOpen: false})}
                />
                <div className="container">

                    <AppButtons
                        itemsChecked={this.state.itemsList.map(i => i.checked).filter(i => i)}

                    />

                    <AppList
                        items={this.state.itemsList}
                        onChange={(checked,idx) => {
                            let {itemsList} = this.state
                            itemsList[idx].checked = checked
                            this.setState({itemsList})
                        }}
                    />

                </div>
            </div>
        );
    }

}

