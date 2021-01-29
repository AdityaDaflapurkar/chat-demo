import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import chats_logo from './imgs/chats_logo.png'
export default function Welcome() {
    
    return (<Box display='flex' flexDirection='column' bgcolor="background.paper" m={2} p={5}>
        <Box display='flex' flexDirection='row' justifyContent="center">
    <Typography variant="h6">Welcome To Chat Room App</Typography>
    </Box>
    <hr></hr>
        <Box display='flex' flexDirection='row' justifyContent="center">
            <img src={chats_logo} alt="chats" style={{width: '25%', height:'25%', minWidth: 250, minHeight: 250}}/>
        </Box>
        <hr></hr>
    <Box display='flex' flexDirection='row' justifyContent="center"><Button variant="contained" color="primary" style={{width:200}}>Login</Button>
    &nbsp;&nbsp;
    <Button variant="contained" color="secondary" style={{width:200}}>Sign Up</Button></Box>
    </Box>)
}