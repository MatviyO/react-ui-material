import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

export const AppList = (props) => {
    return (
        <List component="nav" aria-label="secondary mailbox folders">
            {props.items.map((item, key) => {
                return (
                    <div key={key}>
                        <ListItem button>
                            <ListItemIcon>
                                <Checkbox

                                    checked={item.checked}
                                    onChange={ (e, isInputChecked) => {
                                       props.onChange(isInputChecked, key)

                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText

                                primary={item.name}
                                secondary={item.description}/>
                        </ListItem>
                        <Divider />
                    </div>
                )
            })}

        </List>
    )
}
