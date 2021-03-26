const mongoose = require('mongoose');

const { Schema } = mongoose;

const roomSchema = new Schema(
  {
    title: { type: String, required: true },
    create_date: { type: Date, required: true },
    created_by: {},
  },
  {
    timeStamps: true,
  }
);

const Room = mongoose.model('room', roomSchema);
module.exports = Room;
