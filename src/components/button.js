import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import TelegramIcon from '@material-ui/icons/Telegram';
import Fab from '@material-ui/core/Fab';

const st = {
    marginRight: 20
}
export const AppButtons = (props) => {
    return (
        <div style={{marginBottom: 40}}>
            <Button
                startIcon={<AddIcon/>}
                variant="contained" color="primary" style={st}
                onClick={ (e) => {
                    props.onAdd(e.currentTarget)
                }}

            >
                Add
            </Button>

            <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon/>}
                style={st}
                disabled={props.itemsChecked.length === 0}
                onClick={ () => props.onDelete()}
            >
                Delete
            </Button>

            <Button variant="contained" color="secondary" target="blank"
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
