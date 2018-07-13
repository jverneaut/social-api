import Post from '../models/Post';
import User from '../models/User';

exports.findAll = async (req, res) => {
  const posts = await Post.find();
  return res.json(posts);
};

exports.createOne = async (req, res) => {
  const { userId } = req.session;
  const newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    author: userId,
  });
  await User.findByIdAndUpdate(userId, { $push: { posts: newPost } });
  await newPost.save();
  return res.status(201).redirect('/posts');
};
