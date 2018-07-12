import User from '../models/User';

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  await newUser.save();
  req.session.userId = newUser._id;
  res.json(newUser);
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const isValidPassword = await user.comparePassword(password);
  if (!isValidPassword) {
    const err = new Error('Invalid email or password');
    err.satus = 400;
    res.send(err);
    next(err);
  }

  req.session.userId = user._id;
  res.json(user);
};
