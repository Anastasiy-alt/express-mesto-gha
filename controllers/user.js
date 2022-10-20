const User = require('../models/user');

module.exports.getUser = (req, res) => {
  User.find({})
    .then(user => res.send({data: user}))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createUser = (req, res) => {
  const name = "Tony Stark"
  const about = "Iron Man"
  const avatar = "Iron Man photo"
  //const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({data: user}))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.getUserId = (req, res) => {
  User.find({})
    .then(user => res.send({data: user}))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.updateProfile = (req, res) => {
  User.find({})
    .then(user => res.send({data: req.user._id}))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.updateAvatar = (req, res) => {
  User.find({})
    .then(user => res.send({data: req.user._id}))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};