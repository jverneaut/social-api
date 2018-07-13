import User from '../models/User';

exports.getCurrentUser = async (req, res) => {
  const { userId } = req.session;
  const user = await User.findById(userId);
  return res.status(200).json(user);
};

exports.findAll = async (req, res) => {
  const users = await User.find();
  return res.json(users);
};
