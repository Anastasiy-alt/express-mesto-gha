const router = require('express').Router();
const {
  getCard, deleteCard, createCard, likeCard, dislikeCard,
} = require('../controllers/cards');

const {
  cardIdValid, createCardValid,
} = require('../middlewares/validator');

router.get('/cards', getCard);
router.delete('/cards/:cardId', cardIdValid, deleteCard);
router.post('/cards', createCardValid, createCard);
router.put('/cards/:cardId/likes', cardIdValid, likeCard);
router.delete('/cards/:cardId/likes', cardIdValid, dislikeCard);

module.exports = router;
