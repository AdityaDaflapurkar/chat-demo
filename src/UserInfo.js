import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

export function UserInfo(props) {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5000/users/${props.match.params.user_id}`).then(res => {
      console.log(res, 'res')
      setUser(res.data)
      setLoading(false)
    }).catch(err => {
      setLoading(false)
      console.log(err, 'x')
    })
  }, [])
  
  return loading ? <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}><CircularProgress /></div> : <Box style={{ padding: 20, backgroundColor: 'white' }}>
      <Typography
        variant="subtitle2"
        style={{ color: '#5d6d7e', fontWeight: 'bold' }}
      >
        Name
      </Typography>
      <Typography variant="body1">{user.name}</Typography>
      <br />
      <Typography
        variant="subtitle2"
        style={{ color: '#5d6d7e', fontWeight: 'bold' }}
      >
        Contact
      </Typography>
      <Typography variant="body1">{user.phone}</Typography>
      <br />
      <Typography
        variant="subtitle2"
        style={{ color: '#5d6d7e', fontWeight: 'bold' }}
      >
        Email
      </Typography>
      <Typography variant="body1">{user.email}</Typography>
      <br />
      <Button variant="contained" color="primary">
        Message
      </Button>
    </Box>
}
