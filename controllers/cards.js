const Card = require('../models/cards');

module.exports.createCard = (req, res) => {
  console.log(req.user._id);
  const { name, owners, link, likes, createdAt } = req.body;

  Card.create({ name, owners, link, likes, createdAt })
    .then(card => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};


module.exports.likeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
  { new: true },
);

module.exports.dislikeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } }, // убрать _id из массива
  { new: true },
);

module.exports.getCard = (req, res) => {
  Card.find({})
    .then(card => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (card) {
        res.send({ data: card })
      } else {
        return res.status(404).send({ message: 'Карточка или пользователь не найден.' });
      }
    })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};