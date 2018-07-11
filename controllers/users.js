import User from '../models/User';

exports.findAll = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.createOne = async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  await newUser.save();
  res.json(newUser);
};
