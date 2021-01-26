import './SideMenu.css';
import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const navLinks = [
  { url: '/', name: 'Rooms', key: 1 },
  { url: '/profile', name: 'Your Profile', key: 2 },
  { url: '/create-room', name: 'Create room', key: 3 },
];

export default class SideMenu extends React.Component {
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
          style={{ zIndex: 10 }}
        >
          <ul>
            {navLinks.map(({ url, name, key }) => (
              <li key={key}>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </OutsideClickHandler>
    );
  }
}
