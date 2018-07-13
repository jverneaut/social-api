import Boom from 'boom';

import Post from '../models/Post';
import User from '../models/User';

import asyncHandler from '../middlewares/asyncHandler';

exports.findAll = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  return res.json(posts);
});

exports.createOne = asyncHandler(async (req, res, next) => {
  const { userId } = req.session;
  const { title, body } = req.body;
  if (!title || !body) {
    return next(Boom.badData('missing title or body'));
  }

  const newPost = new Post({
    title,
    body,
    author: userId,
  });
  const user = await User.findByIdAndUpdate(userId, { $push: { posts: newPost } });
  if (!user) return next(Boom.unauthorized('user not found'));

  await newPost.save();
  return res.status(201).redirect('/posts');
});
