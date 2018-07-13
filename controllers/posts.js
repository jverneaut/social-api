import Post from '../models/Post';

exports.findAll = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};
