import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    zIndex: 0,
  },
  inline: {
    display: 'inline',
  },
}));

export function UserList(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText primary="Brunch this weekend?" />
      </ListItem>
    </List>
  );
}
