/* eslint-disable consistent-return */
const Card = require('../models/cards');
const { errorsCatch, ERROR_NOT_FOUND } = require('../utils/errors');

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

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then((card) => {
      if (!card) {
        return res.status(ERROR_NOT_FOUND).send({ message: `Произошла ошибка ${ERROR_NOT_FOUND}` });
      }
      return res.send({ card });
    })
    .catch((err) => errorsCatch(err));
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
    .then((card) => {
      if (!card) {
        return res.status(ERROR_NOT_FOUND).send({ message: `Произошла ошибка ${ERROR_NOT_FOUND}` });
      }
      return res.send({ card });
    })
    .catch((err) => errorsCatch(err));
};

module.exports.getCard = (req, res) => {
  Card.find({})
    .then((card) => res.send({ data: card }))
    .catch((err) => errorsCatch(err));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        return res.status(ERROR_NOT_FOUND).send({ message: `Произошла ошибка ${ERROR_NOT_FOUND}` });
      }
      return res.send({ card });
    })
    .catch((err) => errorsCatch(err));
};
