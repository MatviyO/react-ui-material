import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import TelegramIcon from '@material-ui/icons/Telegram';
import Fab from '@material-ui/core/Fab';
import {orange, teal} from "@material-ui/core/colors";

const st = {
    marginRight: 20
}
export const AppButtons = (props) => {
    return (
        <div style={{marginBottom: 40}}>
            <Button
                startIcon={<AddIcon/>}
                variant="contained" color="primary" style={st}>
                Add
            </Button>

            <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon/>}
                style={st}
                disabled={props.itemsCheked.length === 0}
                onClickAway ={ () => {
                    console.log('click')
                    props.onDelete()
                }}
            >
                Delete
            </Button>

            <Button variant="contained" color="teal" target="blank"
                    href="https://google.com" style={st}
            >
                <TelegramIcon/>
                Google
            </Button>
            <Fab aria-label="add" style={{
                background: 'aqua',
                position: 'fixed',
                right: 50,
                bottom: 50
            }}>
                <AddIcon/>
            </Fab>

        </div>
    )
}
