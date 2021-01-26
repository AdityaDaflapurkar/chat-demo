import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export function UserInfo() {
  return (
    <Box style={{ padding: 20, backgroundColor: 'white' }}>
      <Typography
        variant="subtitle2"
        style={{ color: '#5d6d7e', fontWeight: 'bold' }}
      >
        Name
      </Typography>
      <Typography variant="body1">Ali Connors</Typography>
      <br />
      <Typography
        variant="subtitle2"
        style={{ color: '#5d6d7e', fontWeight: 'bold' }}
      >
        Contact
      </Typography>
      <Typography variant="body1">1234567890</Typography>
      <br />
      <Typography
        variant="subtitle2"
        style={{ color: '#5d6d7e', fontWeight: 'bold' }}
      >
        Email
      </Typography>
      <Typography variant="body1">AliC12@gmail.com</Typography>
      <br />
      <Button variant="contained" color="primary">
        Message
      </Button>
    </Box>
  );
}
