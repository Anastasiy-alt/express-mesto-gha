const router = require('express').Router();
const {
  getUserId, getUser, updateProfile, updateAvatar, getUserMe,
} = require('../controllers/users');
const {
  updateProfileValid,
  updateAvatarValid,
} = require('../middlewares/validator');

router.get('/users', getUser);
router.get('/users/:userId', getUserId);
router.get('/users/me', getUserMe);
router.patch('/users/me', updateProfileValid, updateProfile);
router.patch('/users/me/avatar', updateAvatarValid, updateAvatar);

module.exports = router;
