const router = require('express').Router();
const {
  getUserId, getUser, updateProfile, updateAvatar, getUserMe,
} = require('../controllers/users');

router.get('/users', getUser);
router.get('/users/:userId', getUserId);
router.get('/users/me', getUserMe);
// router.post('/users', createUser);
router.patch('/users/me', updateProfile);
router.patch('/users/me/avatar', updateAvatar);

module.exports = router;
