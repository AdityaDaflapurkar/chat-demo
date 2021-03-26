import React from 'react'
export const MESSAGE_STATUS = {
  SENDING: 'sending',
  SENT: 'sent',
};

export const MESSAGE_TYPE = {
  TYPING: 'typing',
  IMAGE: 'image',
  TEXT: 'text',
};

export const HEADER_TITLES = {
  HOME: 'Home',
  CREATE_ROOM: 'Create room',
  ROOMS: 'My rooms',
  USERS: 'View Users'
}
export const AppContext = React.createContext({
  getAuth: () => ({})
});