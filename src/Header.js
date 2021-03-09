import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import SignoutIcon from '@material-ui/icons/ExitToApp';
import { useContext } from 'react'
import { AppContext } from './constants';

export default function Header(props) {
  const appContext = useContext(AppContext) 
  return (
    <>
      <AppBar style={{ backgroundColor: 'black' }} position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={props.openSideMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{props.title}</Typography>
          {appContext.getAuth().username ?
          <Box display="flex" flexDirection="row" justifyContent="flex-end" flexGrow={1}>
            {appContext.getAuth().username}
            &nbsp;<SignoutIcon />
          </Box>: ''}
        </Toolbar>
      </AppBar>
    </>
  );
}
