import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
  upvoters: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  downvoters: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  author: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
});

export default mongoose.model('Post', postSchema);
