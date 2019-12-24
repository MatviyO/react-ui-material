import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import SvgIcon from '@material-ui/core/SvgIcon';
import {pink, purple} from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core/styles';
import ContactsIcon from '@material-ui/icons/Contacts';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    roo: {
        width: 250
    }
});

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </SvgIcon>
    );
}

export const AppDrawer = (props) => {
    const classes = useStyles();

    return (
        <Drawer open={props.open}
                onClose={open => props.onToggle(open)}
        >
            <MenuItem className={classes.roo}>
                <ListItemIcon>
                    <HomeIcon style={{color: pink[500]}}/>
                </ListItemIcon>
                <Typography>Home
                </Typography>
            </MenuItem>
            <MenuItem className={classes.roo}>
                <ListItemIcon>
                    <ContactsIcon style={{color: purple[500]}}/></ListItemIcon>
                <Typography>
                    Contact
                </Typography>
            </MenuItem>

        </Drawer>
    )
}
