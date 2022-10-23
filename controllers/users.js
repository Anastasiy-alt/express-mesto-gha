/* eslint-disable consistent-return */
const User = require('../models/users');
const { errorsCatch, ERROR_NOT_FOUND } = require('../utils/errors');

module.exports.getUser = (req, res) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch((err) => errorsCatch(err));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => errorsCatch(err));
};

module.exports.getUserId = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(ERROR_NOT_FOUND).send({ message: `Произошла ошибка ${ERROR_NOT_FOUND}` });
      }
      return res.send({ user });
    })
    .catch((err) => errorsCatch(err));
};

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true },
  )
    .then((user) => {
      if (!user) {
        return res.status(ERROR_NOT_FOUND).send({ message: `Произошла ошибка ${ERROR_NOT_FOUND}` });
      }
      return res.send({ user });
    })
    .catch((err) => errorsCatch(err));
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true },
  )
    .then((user) => {
      if (!user) {
        return res.status(ERROR_NOT_FOUND).send({ message: `Произошла ошибка ${ERROR_NOT_FOUND}` });
      }
      return res.send({ user });
    })
    .catch((err) => errorsCatch(err));
};
