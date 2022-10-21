/* eslint-disable consistent-return */
const Card = require('../models/cards');
const { errorsCatch } = require('../utils/errors');

module.exports.createCard = (req, res) => {
  const {
    name, owners, link, likes, createdAt,
  } = req.body;

  Card.create({
    name, owners, link, likes, createdAt,
  })
    .then((card) => res.send({ data: card }))
    .catch((err) => errorsCatch(err));
};

module.exports.likeCard = (req) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
  { new: true },
);

module.exports.dislikeCard = (req) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } }, // убрать _id из массива
  { new: true },
);

module.exports.getCard = (req, res) => {
  Card.find({})
    .then((card) => res.send({ data: card }))
    .catch((err) => errorsCatch(err));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (card) {
        res.send({ data: card });
      } else {
        return res.status(404).send({ message: 'Карточка или пользователь не найден.' });
      }
    })
    .catch((err) => errorsCatch(err));
};
