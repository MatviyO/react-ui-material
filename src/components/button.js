import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const st = {
    marginRight: 20
}
export const AppButtons = () => {
    return (
        <div style={{marginBottom: 40}}>
            <Button
                startIcon={<AddIcon />}
                variant="contained" color="primary" style={st} >
                Add
            </Button>

            <Button target="blank"
                    href="https://google.com"
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    style={st} >
                Delete
            </Button>
            <Button variant="contained" color="secondary" style={st} >
                Google
            </Button>

        </div>
    )
}
