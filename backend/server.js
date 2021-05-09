const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
const { connection } = mongoose;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

const roomRouter = require('./routes/rooms');
const userRouter = require('./routes/users');
const messageRouter = require('./routes/messages');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, 'secret', (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
app.use('/rooms', /* authenticateJWT, */ roomRouter);
app.use('/messages', /* authenticateJWT, */ messageRouter);
app.use('/users', userRouter);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//WS code starts here

const MESSAGE_STATUS = {
  SENDING: 'sending',
  SENT: 'sent',
};

const MESSAGE_TYPE = {
  TYPING: 'typing',
  IMAGE: 'image',
  TEXT: 'text',
};

const http = require('http');
const socketIo = require('socket.io');
const index = require('./routes/index');

const app1 = express();
app1.use(index);

const server = http.createServer(app1);

const io = socketIo(server);

const messageHistory = [
  {
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sentBy: 'user',
    sentDate: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    status: MESSAGE_STATUS.SENT,
    type: MESSAGE_TYPE.TEXT,
  },
  {
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sentBy: 'bot',
    sentDate: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    status: MESSAGE_STATUS.SENT,
    type: MESSAGE_TYPE.TEXT,
  },
  {
    text: 'hello',
    sentBy: 'user',
    sentDate: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    status: MESSAGE_STATUS.SENT,
    type: MESSAGE_TYPE.TEXT,
  },
  {
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sentBy: 'user',
    sentDate: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    status: MESSAGE_STATUS.SENT,
    type: MESSAGE_TYPE.TEXT,
  },
  {
    text: 'hello',
    sentBy: 'bot',
    sentDate: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    status: MESSAGE_STATUS.SENT,
    type: MESSAGE_TYPE.TEXT,
  },
  {
    text: 'hello',
    sentBy: 'user',
    sentDate: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    status: MESSAGE_STATUS.SENT,
    type: MESSAGE_TYPE.TEXT,
  },
];

server.listen(3001, () => console.log(`Listening on port ${port}`));

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('load', () => {
    console.log('load event received');
    socket.emit('history', messageHistory);
  });

  socket.on('message', (message) => {
    messageHistory.push(message);
    setTimeout(() => {
      socket.emit('typing');
      const date = new Date();
      messageHistory.push({
        text: Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, ''),
        sentBy: 'bot',
        sentDate: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
        status: MESSAGE_STATUS.SENT,
      });
      setTimeout(() => socket.emit('history', messageHistory), 3000);
    }, 2000);
  });
  socket.on('send-chat-message', (message) => {
    socket.broadcast.emit('chat-message', {
      message,
      //name: users[socket.id],
    });
  });
});
