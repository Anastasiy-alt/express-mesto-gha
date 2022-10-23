const User = require('../models/users');
const { errorsCatch } = require('../utils/errors');

module.exports.getUser = (req, res) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch((err) => errorsCatch(err));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => errorsCatch(err));
};

module.exports.getUserId = (req, res) => {
  User.find({})
    .then((user) => res.send({ user }))
    .catch((err) => errorsCatch(err));
};

module.exports.updateProfile = (req, res) => {
  User.find({})
    .then(() => res.send({ data: req.user._id }))
    .catch((err) => errorsCatch(err));
};

module.exports.updateAvatar = (req, res) => {
  User.find({})
    .then(() => res.send({ data: req.user._id }))
    .catch((err) => errorsCatch(err));
};
