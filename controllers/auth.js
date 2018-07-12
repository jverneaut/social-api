import User from '../models/User';

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  await newUser.save();
  res.json(newUser);
};
