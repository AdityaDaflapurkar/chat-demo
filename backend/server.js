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
