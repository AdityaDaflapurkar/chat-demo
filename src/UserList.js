import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

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
  const [listLoading, setListLoading] = useState(false)
  const [users, setUsers] = useState([])
  const classes = useStyles();

  useEffect(() => {
    setListLoading(true)
    axios.get('http://localhost:5000/users').then(res => {
      console.log(res, 'res')
      setUsers(res.data)
      setListLoading(false)
    }).catch(err => {
      setListLoading(false)
      console.log(err, 'x')
    })
  }, [])
  
  return (
    <>{ listLoading ? <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}><CircularProgress /></div>
    :(<List className={classes.root}>
        {
          users.map(user => (<><ListItem alignItems="flex-start" component={Link} to={'users/' + user._id} button={true}>
            <ListItemText primary={user.name} />
            </ListItem>
            <Divider/></>))
        }
      
    </List>)}</>

  );
}
