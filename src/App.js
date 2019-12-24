import React, {Component} from 'react';
import './App.css';
import {AppHeader} from './components/header';
import {AppDrawer} from "./components/drawer";
import {AppButtons} from "./components/button";
import {AppList} from "./components/list";

export default class App extends Component {
    constructor(probs) {
        super(probs)
        this.state = {
            isDrawerOpen: false,
            itemsList: [
                { name: 'Element 1', description: 'Description', cheked: false},
                { name: 'Element 2', description: 'Description2', cheked: false},
                { name: 'Element 3', description: 'Description3', cheked: false}
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
                        itemsCheked={this.state.itemsList.map(i => i.cheked).filter(i => i)}
                        onDelete={() => [
                            
                        ]}
                    />
                    <AppList
                        items={this.state.itemsList}
                        onCheck={(cheked,idx) => {
                            let {itemsList} = this.state
                            itemsList[idx].cheked = cheked
                        }}
                    />
                </div>
            </div>
        );
    }

}

