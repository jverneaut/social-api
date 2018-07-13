import Boom from 'boom';

import User from '../models/User';

import asyncHandler from '../middlewares/asyncHandler';

exports.signup = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(Boom.badData('missing email or password'));
  }

  const newUser = new User({ email, password });
  await newUser.save();
  req.session.userId = newUser._id;
  return res.json(newUser);
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(Boom.badData('missing email or password'));
  }

  const user = await User.findOne({ email });
  if (!user) {
    return next(Boom.unauthorized('invalid email or password'));
  }

  const isValidPassword = await user.comparePassword(password);
  if (!isValidPassword) {
    return next(Boom.unauthorized('invalid email or password'));
  }

  req.session.userId = user._id;
  return res.json(user);
});

exports.logout = (req, res, next) => {
  if (req.session.userId) {
    return req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).end();
    });
  }
  return res.status(200).end();
};
