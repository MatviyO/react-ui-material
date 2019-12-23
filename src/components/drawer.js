import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import SvgIcon from '@material-ui/core/SvgIcon';

export const AppDrawer = (props) => {

    return (
        <Drawer open={props.open}
                onClose={ open => props.onToggle(open )}



                    >
            <MenuItem><SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon> Home</MenuItem>
            <MenuItem>Contact</MenuItem>
        </Drawer>
    )
}
