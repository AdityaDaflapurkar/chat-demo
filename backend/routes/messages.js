const router = require('express').Router();
const Message = require('../models/message.model');

// Get all messages in room
router.route('/:room_id').get((req, res) => {
  Message.find({
    room_id: req.params.room_id,
  })
    .then((messages) => res.json(messages))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});

// Post new message to room
router.route('/').post((req, res) => {
  const newMessage = new Message({
    user_id: req.body.user_id,
    room_id: req.body.room_id,
    text_content: req.body.text_content,
    image_content: req.body.image_content,
    create_date: req.body.create_date,
    posted_by: req.body.posted_by,
  });
  newMessage
    .save()
    .then(() => res.json('Message added'))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});

module.exports = router;
