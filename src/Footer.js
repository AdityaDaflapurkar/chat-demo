import React from 'react';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import './Footer.css';
import { IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#34495e',
      outline: 'none',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#34495e',
      outline: 'none',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#b9c9d8',
        outline: 'none',
      },
      '&:hover fieldset': {
        borderColor: '#b9c9d8',
        outline: 'none',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#b9c9d8',
        outline: 'none',
      },
    },
  },
})(TextField);

class Footer extends React.PureComponent {
  state = {
    messageInput: '',
  };

  onUserInput = (event) => {
    this.setState({
      messageInput: event.target.value,
    });
  };

  onImageInput = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      this.props.setImage(event);
    }
  };

  submitInput = () => {
    this.setState({
      messageInput: '',
    });
    this.props.sendMessage(this.state.messageInput);
  };

  render() {
    const { messageInput } = this.state;
    return (
      <div
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
        }}
      >
        {/* TODO: uncomment later <ImageBuffer></ImageBuffer> */}
        <div
          className="footer"
          style={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
          }}
        >
          <CssTextField
            id="outlined-multiline-static"
            multiline
            variant="outlined"
            style={{
              flex: 1,
              backgroundColor: 'white',
            }}
            onInput={this.onUserInput}
            value={messageInput}
            InputProps={{
              readOnly: false,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    variant="contained"
                    component="label"
                    style={{ backgroundColor: '#b9c9d8' }}
                    // size='small'
                  >
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      hidden
                      multiple
                      onInput={this.onImageInput}
                      style={{
                        width: '100%',
                        backgroundColor: 'white',
                      }}
                    />
                    <AttachFileIcon
                      style={{ color: '#34495e' }}
                      fontSize="small"
                    />
                  </IconButton>
                  &nbsp;
                  <IconButton
                    variant="contained"
                    component="label"
                    style={{ backgroundColor: '#b9c9d8' }}
                  >
                    <SendSharpIcon
                      onClick={this.submitInput}
                      style={{ color: '#34495e' }}
                      fontSize="small"
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    );
  }
}

export default Footer;
