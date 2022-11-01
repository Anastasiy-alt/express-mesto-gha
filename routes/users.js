const router = require('express').Router();
const {
  getUserId, getUser, updateProfile, updateAvatar, getUserMe,
} = require('../controllers/users');
const {
  updateProfileValid,
  updateAvatarValid,
  getUserIdValid,
} = require('../middlewares/validator');

router.get('/users', getUser);
router.get('/users/me', getUserMe);
router.get('/users/:userId', getUserIdValid, getUserId);
router.patch('/users/me', updateProfileValid, updateProfile);
router.patch('/users/me/avatar', updateAvatarValid, updateAvatar);

module.exports = router;
