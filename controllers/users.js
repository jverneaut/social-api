import Boom from 'boom';

import User from '../models/User';

import asyncHandler from '../middlewares/asyncHandler';

exports.getCurrentUser = asyncHandler(async (req, res, next) => {
  const { userId } = req.session;
  try {
    const user = await User.findById(userId);
    return res.status(200).json(user);
  } catch (err) {
    return next(Boom.unauthorized('user not found'));
  }
});

exports.findAll = asyncHandler(async (req, res) => {
  const users = await User.find();
  return res.json(users);
});
