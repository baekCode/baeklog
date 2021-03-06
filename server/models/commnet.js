import mongoose from 'mongoose';
import moment from 'moment';

const CommentShema = new mongoose.Schema({
  contents  : {
    type    : String,
    required: true
  },
  date      : {
    type   : String,
    default: moment().format('YYYY-MM-DD hh:mm:ss')
  },
  post      : {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'post'
  },
  creator   : {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'user'
  },
  createName: {
    type: String
  }
});

const Comment = mongoose.model('comment', CommentShema);

export default Comment;