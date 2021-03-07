import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { loginUser } from './service'

const HELPER_TEXTS = {
  USERNAME_NOT_EMPTY: 'Username cannot be empty',
  EMAIL_NOT_EMPTY: 'Email ID cannot be empty',
  CONTACT_NOT_EMPTY: 'Contact cannot be empty',
  PASSWORD_NOT_EMPTY: 'Password cannot be empty',
  INVALID_EMAIL: 'Invalid format for email',
  INVALID_CONTACT: 'Invalid contact number',
  INVALID_USER: 'Invalid email or phone number',
};

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [usernameHelperText, setUsernameHelperText] = useState('');
  const [passwordHelperText, setPasswordHelperText] = useState('');

  const onUsernameChange = (event) => {
    setUsernameError(false);
    setUsernameHelperText(false);
    setUsername(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPasswordError(false);
    setPasswordHelperText(false);
    setPassword(event.target.value);
  };

  const onUsernameBlur = () => {
    if (username === '') {
      setUsernameError(true);
      setUsernameHelperText(HELPER_TEXTS.USERNAME_NOT_EMPTY);
    } else if (!isEmail(username) && !isContact(username)) {
      setUsernameError(true);
      setUsernameHelperText(HELPER_TEXTS.INVALID_USER);
    }
  };

  const isEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return !re.test(email);
  };

  const isContact = (contact) => {
    var re = /^\d{10}$/;
    return !re.test(contact);
  };

  const onPasswordBlur = () => {
    if (password === '') {
      setPasswordError(true);
      setPasswordHelperText(HELPER_TEXTS.PASSWORD_NOT_EMPTY);
    }
  };

  const onClickLogin = () => {
    loginUser(username, password)
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{ backgroundColor: 'white', padding: 10 }}
    >
      <FormControl style={{ backgroundColor: 'white', padding: 10 }}>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          value={username}
          error={usernameError}
          onChange={onUsernameChange}
          onBlur={onUsernameBlur}
          helperText={usernameHelperText}
        />
      </FormControl>
      <FormControl style={{ backgroundColor: 'white', padding: 10 }}>
        <TextField
          id="password_set"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          error={passwordError}
          onChange={onPasswordChange}
          onBlur={onPasswordBlur}
          helperText={passwordHelperText}
        />
      </FormControl>
      <FormControl
        style={{
          backgroundColor: 'white',
          padding: 10,
          width: 200,
        }}
      >
        <Button variant="contained" color="primary" onClick={onClickLogin}>
          Login
        </Button>
      </FormControl>
    </Box>
  );
}
