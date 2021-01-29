import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

export default function RoomList(props) {
  const classes = useStyles();

  const [listLoading, setListLoading] = useState(false)
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    setListLoading(true)
    axios.get('http://localhost:5000/rooms').then(res => {
      console.log(res, 'res')
      setRooms(res.data)
      setListLoading(false)
    }).catch(err => {
      setListLoading(false)
      console.log(err, 'x')
    })
  }, [])
  
  return (
    <List className={classes.root}>
      {rooms.map(room => <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={room.title}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {room.created_by}
              </Typography>
              {'- '} {room.create_date}
            </>
          }
        />
      
      </ListItem><Divider/></>) 
}
          </List>
  );
}
