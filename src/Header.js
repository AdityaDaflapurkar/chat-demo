import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header(props) {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark" style={{position: 'fixed', top:0, width: "100%", zIndex: 100}}>
    <MenuIcon style={{color: 'white', marginBottom: 3, marginRight: 5, cursor: 'pointer'}} onClick={props.openSideMenu}/>
<Navbar.Brand href="#home">Chat room</Navbar.Brand>
</Navbar> */}
      <AppBar style={{ backgroundColor: 'black' }} position="static">
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
        </Toolbar>
      </AppBar>
    </>
  );
}
