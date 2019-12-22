import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';


export const AppDrawer = (props) => {

    return (
        <Drawer open={props.open}
                onClose={ open => props.onToggle(open)}


                    >
            <MenuItem> Home</MenuItem>
            <MenuItem>Contact</MenuItem>
        </Drawer>
    )
}
