import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const HELPER_TEXTS = {
    TITLE_NOT_EMPTY: 'Title for room cannot be empty',
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
      backgroundColor: '#6d8eae',
      color: 'white'
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));

export default function CreateRoom() {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [titleHelperText, setTitleHelperText] = useState('');
  const [users, setUsers] = useState([
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ])
  const [members, setMembers] = useState([])
  const classes = useStyles();
  
  const onTitleChange = (event) => {
    setTitleError(false);
    setTitleHelperText(false);
    setTitle(event.target.value);
  };

  const onTitleBlur = () => {
    if (title === '') {
        setTitleError(true);
        setTitleHelperText(HELPER_TEXTS.TITLE_NOT_EMPTY);
    }
  };

  const onMembersChange = (event) => {
    setMembers(event.target.value)
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{ backgroundColor: 'white', padding: 10 }}
    >
      <FormControl style={{ backgroundColor: 'white', padding: 10 }}>
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          value={title}
          error={titleError}
          onChange={onTitleChange}
          onBlur={onTitleBlur}
          helperText={titleHelperText}
          required
        />
      </FormControl>
      <br/>
      <FormControl style={{ backgroundColor: 'white', padding: 10 }}>
        <InputLabel style={{ backgroundColor: 'white', padding: 10 }} id="demo-mutiple-checkbox-label">Members</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={members}
          onChange={onMembersChange}
          input={<Input />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {users.map((user) => (
            <MenuItem key={user} value={user}>
              <Checkbox checked={members.indexOf(user) > -1} />
              <ListItemText primary={user} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        style={{
          backgroundColor: 'white',
          padding: 10,
          width: 200,
        }}
      >
        <Button variant="contained" color="primary">
          Create Room
        </Button>
      </FormControl>
    </Box>
  );
}
