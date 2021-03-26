const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    text_content: { type: String },
    image_content: { type: String },
    room_id: {},
    posted_by: {},
    create_date: { type: Date, required: true },
  },
  {
    timeStamps: true,
  }
);

const Message = mongoose.model('message', messageSchema);
module.exports = Message;
