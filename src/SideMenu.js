import './SideMenu.css';
import React from 'react';
import { NavLink } from 'react-router-dom'
import OutsideClickHandler from 'react-outside-click-handler';
import { HEADER_TITLES, AppContext } from './constants';

const navLinks = [
  { url: '/', name: HEADER_TITLES.HOME, key: 1, },
  { url: '/rooms', name: HEADER_TITLES.ROOMS, key: 2, },
  { url: '/users', name: HEADER_TITLES.USERS, key: 3, },
  { url: '/create-room', name: HEADER_TITLES.CREATE_ROOM, key: 4 },
];

export default class SideMenu extends React.Component {
  static contextType = AppContext
  render() {
    return (
      <OutsideClickHandler
        onOutsideClick={() => {
          this.props.close();
        }}
      >
        <div
          className="menu active"
          onBlur={this.props.close}
          style={{ zIndex: 10, position: 'fixed' }}
        >
          <ul>
            {navLinks.map(({ url, name, key, }) => (
              <li key={key}>
                <NavLink to={url} exact activeStyle={{backgroundColor: '#add2f7'}} onClick={() => 
                  this.context.setHeaderTitle(name)
                  }>{name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </OutsideClickHandler>
    );
  }
}
