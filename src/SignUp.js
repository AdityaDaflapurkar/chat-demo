import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

const HELPER_TEXTS = {
  USERNAME_NOT_EMPTY: 'Username cannot be empty',
  EMAIL_NOT_EMPTY: 'Email ID cannot be empty',
  CONTACT_NOT_EMPTY: 'Contact cannot be empty',
  PASSWORD_NOT_EMPTY: 'Password cannot be empty',
  PASSWORD_CONFIRM_NOT_EMPTY: 'Password cannot be empty',
  INVALID_EMAIL: 'Invalid format for email',
  INVALID_CONTACT: 'Invalid contact number',
  PASSWORDS_NOT_MATCHING: 'Passwords not matching',
};

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [usernameHelperText, setUsernameHelperText] = useState('');
  const [emailHelperText, setEmailHelperText] = useState('');
  const [contactHelperText, setContactHelperText] = useState('');
  const [passwordHelperText, setPasswordHelperText] = useState('');
  const [passwordConfirmHelperText, setPasswordConfirmHelperText] = useState(
    ''
  );

  const onUsernameChange = (event) => {
    setUsernameError(false);
    setUsernameHelperText(false);
    setUsername(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmailError(false);
    setEmailHelperText(false);
    setEmail(event.target.value);
  };

  const onContactChange = (event) => {
    setContactError(false);
    setContactHelperText(false);
    const onlyNums = event.target.value.replace(/[^0-9]/g, '');
    if (onlyNums.length < 10) {
      setContact(onlyNums);
    } else {
      const number = onlyNums.substring(0, 10);
      setContact(number);
    }
  };

  const onPasswordChange = (event) => {
    setPasswordError(false);
    setPasswordHelperText(false);
    setPassword(event.target.value);
  };

  const onPasswordConfirmChange = (event) => {
    setPasswordConfirmError(false);
    setPasswordConfirmHelperText(false);
    setPasswordConfirm(event.target.value);
  };

  const onUsernameBlur = () => {
    if (username === '') {
      setUsernameError(true);
      setUsernameHelperText(HELPER_TEXTS.USERNAME_NOT_EMPTY);
    }
  };

  const onContactBlur = (event) => {
    if (event.target.value === '') {
      setContactError(true);
      setContactHelperText(HELPER_TEXTS.CONTACT_NOT_EMPTY);
    }
  };

  const onEmailBlur = (event) => {
    var re = /\S+@\S+\.\S+/;
    if (event.target.value === '') {
      setEmailError(true);
      setEmailHelperText(HELPER_TEXTS.EMAIL_NOT_EMPTY);
    } else if (!re.test(email)) {
      setEmailError(true);
      setEmailHelperText(HELPER_TEXTS.INVALID_EMAIL);
    }
  };

  const onPasswordBlur = () => {
    if (password === '') {
      setPasswordError(true);
      setPasswordHelperText(HELPER_TEXTS.PASSWORD_NOT_EMPTY);
    }
  };

  const onPasswordConfirmBlur = () => {
    if (password === '') {
      setPasswordConfirmError(true);
      setPasswordConfirmHelperText(HELPER_TEXTS.PASSWORD_CONFIRM_NOT_EMPTY);
    } else if (password !== passwordConfirm) {
      setPasswordError(true);
      setPasswordConfirmError(true);
      setPasswordConfirmHelperText(HELPER_TEXTS.PASSWORDS_NOT_MATCHING);
    }
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
          required
        />
      </FormControl>
      <FormControl style={{ backgroundColor: 'white', padding: 10 }}>
        <TextField
          id="email"
          label="Email Id"
          variant="outlined"
          value={email}
          error={emailError}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
          helperText={emailHelperText}
          required
        />
      </FormControl>
      <FormControl style={{ backgroundColor: 'white', padding: 10 }}>
        <TextField
          id="contact"
          label="Contact No."
          variant="outlined"
          type="numeric"
          value={contact}
          error={contactError}
          onChange={onContactChange}
          onBlur={onContactBlur}
          helperText={contactHelperText}
          required
        />
      </FormControl>
      <FormControl style={{ backgroundColor: 'white', padding: 10 }}>
        <TextField
          id="password_set"
          label="Set password"
          variant="outlined"
          type="password"
          value={password}
          error={passwordError}
          onChange={onPasswordChange}
          onBlur={onPasswordBlur}
          helperText={passwordHelperText}
          required
        />
      </FormControl>
      <FormControl style={{ backgroundColor: 'white', padding: 10 }}>
        <TextField
          id="password_confirm"
          label="Confirm password"
          variant="outlined"
          type="password"
          value={passwordConfirm}
          error={passwordConfirmError}
          onChange={onPasswordConfirmChange}
          onBlur={onPasswordConfirmBlur}
          helperText={passwordConfirmHelperText}
          required
        />
      </FormControl>
      <FormControl
        style={{
          backgroundColor: 'white',
          padding: 10,
          width: 200,
        }}
      >
        <Button variant="contained" color="primary">
          Register User
        </Button>
      </FormControl>
    </Box>
  );
}
