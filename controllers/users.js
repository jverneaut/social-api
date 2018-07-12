import User from '../models/User';

exports.findAll = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
