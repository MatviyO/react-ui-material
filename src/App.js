import React, {Component} from 'react';
import './App.css';
import {AppHeader} from './components/header';
import {AppDrawer} from "./components/drawer";
import {AppButtons} from "./components/button";
import {AppList} from "./components/list";
import Popover from '@material-ui/core/Popover';
import {AppForm} from "./components/form";



export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isDrawerOpen: false,
            isPopoverOpen: false,
            popoverEl: null,
            itemsList: [
                {name: 'Element 1', description: 'Description', checked: false},
                {name: 'Element 2', description: 'Description2', checked: false},
                {name: 'Element 3', description: 'Description3', checked: false}
            ]
        }
    }
    onAdd(item) {
        let itemsList = this.state.itemsList
        itemsList.push(item)
        this.setState({
            itemsList
        })
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
                        onDelete={() => {
                            let itemsList = this.state.itemsList.filter(i => !i.checked)
                            this.setState({itemsList})
                        }}
                        onAdd={ (popoverEl) => {
                            this.setState({
                                popoverEl, isPopoverOpen: true
                            })
                        }}
                    />
                    <AppList
                        items={this.state.itemsList}
                        onChange={(checked, idx) => {
                            let {itemsList} = this.state
                            itemsList[idx].checked = checked
                            this.setState({itemsList})
                        }}
                    />
                    <Popover open={this.state.isPopoverOpen}
                             anchorEl={this.state.popoverEl}
                             anchorOrigin={{
                                 vertical: 'bottom',
                                 horizontal: 'center',
                             }}
                             transformOrigin={{
                                 vertical: 'top',
                                 horizontal: 'center',
                             }}
                             onClose={ () => {
                                 this.setState( {isPopoverOpen: false})
                             }}

                    >
                        <AppForm
                        onAdd={this.onAdd.bind(this)}
                        />
                    </Popover>
                </div>
            </div>
        );
    }

}

// imm gllg

