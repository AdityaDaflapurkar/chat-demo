import './App.css';
import Welcome from './Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProtectedRoute } from './ProtectedRoute'
import { Route } from 'react-router-dom'
import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import { UserList } from './UserList';
import { UserInfo } from './UserInfo';
import Header from './Header';
import SideMenu from './SideMenu';
import RoomList from './RoomList';
import CreateRoom from './CreateRoom';
import Room from './Room';
import { HEADER_TITLES, AppContext } from './constants';

class App extends React.Component {
  state = {
    isSideMenuOpened: false,
    headerTitle: HEADER_TITLES.HOME,
    isLoggedIn: false,
    username: null,
    token: null
  }

  getAuth = () => {
    return {
      isLoggedIn: this.state.isLoggedIn,
      username: this.state.username,
      token: this.state.token
    }
  }

  openSideMenu = () => {
    this.setState({
      isSideMenuOpened: true,
    });
  };

  closeSideMenu = () => {
    this.setState({
      isSideMenuOpened: false,
    });
  };

  setLoginInfo = ({isLoggedIn, username, token}) => {
    this.setState({
      isLoggedIn,
      username,
      token
    })
  }

  setHeaderTitle = headerTitle => {
    this.setState({
      headerTitle,
    }, () => setTimeout(() => this.closeSideMenu(), 300));
  }

  render() {
    const { isSideMenuOpened, headerTitle } = this.state;
  return (
    <div className="App"> 
      <AppContext.Provider value={{setHeaderTitle: this.setHeaderTitle, getAuth: this.getAuth, setLoginInfo: this.setLoginInfo }}>
      <Header openSideMenu={this.openSideMenu} title={headerTitle}/>
      {isSideMenuOpened ? <SideMenu close={this.closeSideMenu} /> : ''}
      <ProtectedRoute path="/users" exact component={UserList}/>
      <ProtectedRoute path="/users/:user_id" component={UserInfo}/>
      <ProtectedRoute path="/rooms/:room_id" component={Room}/>
      <ProtectedRoute path="/rooms" exact component={RoomList}/>
      <ProtectedRoute path="/create-room" component={CreateRoom}/>
      <Route path="/" exact component={Welcome}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={Login}/>
      </AppContext.Provider>
    </div>
  );
  }
}

export default App;
