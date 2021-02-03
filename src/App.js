import './App.css';
import Welcome from './Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import { UserList } from './UserList';
import { UserInfo } from './UserInfo';
import Header from './Header';
import SideMenu from './SideMenu';
import RoomList from './RoomList';
import CreateRoom from './CreateRoom';
import { HEADER_TITLES } from './constants';

class App extends React.Component {
  state = {
    isSideMenuOpened: false,
    headerTitle: HEADER_TITLES.HOME
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

  setHeaderTitle = headerTitle => {
    this.setState({
      headerTitle,
    }, () => setTimeout(() => this.closeSideMenu(), 300));
  }

  render() {
    const { isSideMenuOpened, headerTitle } = this.state;
  return (
    <div className="App">
      <Header openSideMenu={this.openSideMenu} title={headerTitle}/>
      {isSideMenuOpened ? <SideMenu close={this.closeSideMenu} setHeaderTitle={this.setHeaderTitle} /> : ''}
      <Route path="/rooms" component={RoomList}/>
      <Route path="/users" exact component={UserList}/>
      <Route path="/users/:user_id" component={UserInfo}/>
      <Route path="/create-room" component={CreateRoom}/>
      <Route path="/" exact component={Welcome}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={Login}/>
    </div>
  );
  }
}

export default App;
