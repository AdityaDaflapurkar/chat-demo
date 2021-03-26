const router = require('express').Router();
const Room = require('../models/room.model');

// Get All rooms
router.route('/').get((req, res) => {
  Room.find()
    .then((rooms) => res.json(rooms))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});

// Get Single room by id
router.route('/:room_id').get((req, res) => {
  Room.find({
    _id: room_id,
  })
    .then((room) => res.json(room))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});

// Create New Room
router.route('/').post((req, res) => {
  const { user_id } = req.body;
  const { title } = req.body;
  const { create_date } = req.body;
  const newRoom = new Room({
    title,
    create_date,
    created_by: user_id,
  });
  newRoom
    .save()
    .then(() => res.json('Room added'))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});

module.exports = router;
