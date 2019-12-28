import React, {Component} from 'react';
import './App.css';
import {AppHeader} from './components/header';
import {AppDrawer} from "./components/drawer";
import {AppButtons} from "./components/button";
import {AppList} from "./components/list";
import Popover from '@material-ui/core/Popover';
import {AppForm} from "./components/form";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isDrawerOpen: false,
            isPopoverOpen: false,
            popoverEl: null,
            isDialogOpen: false,
            isSnackOpen: false,
            date: '2019-08-18T21:11:54',
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
                        onAdd={(popoverEl) => {
                            this.setState({
                                popoverEl, isPopoverOpen: true
                            })
                        }}
                        openModal={() => this.setState({isDialogOpen: true})}
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
                             onClose={() => {
                                 this.setState({isPopoverOpen: false})
                             }}
                    >
                        <AppForm
                            onAdd={this.onAdd.bind(this)}
                        />
                    </Popover>
                </div>

                <Dialog
                    open={this.state.isDialogOpen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={isDialogOpen => this.setState({isDialogOpen: false})
                    }
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Select a your date "}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Date picker dialog"
                                    format="MM/dd/yyyy"
                                    value={this.state.date}
                                    onChange={(d) => {
                                        this.setState({date: d})
                                    }}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={isDialogOpen => this.setState({isDialogOpen: false})} color="primary">
                            Close
                        </Button>
                        <Button onClick={ (isSnackOpen, isDialogOpen)  => {
                            this.setState({isDialogOpen: false})
                            this.setState({isSnackOpen: true})

                        }
                        } color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.isSnackOpen}
                    autoHideDuration={6000}
                    onClose={ isSnackOpen => this.setState({ isSnackOpen: false})}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Note archived</span>}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={isSnackOpen => this.setState({ isSnackOpen: false})}>
                            Well done
                        </Button>,
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            onClick={isSnackOpen => this.setState({ isSnackOpen: false})}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        );

    }

}

// imm gllg

