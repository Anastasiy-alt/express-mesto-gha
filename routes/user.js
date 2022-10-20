const router = require('express').Router();
const {
  createUser, getUserId, getUser, updateProfile, updateAvatar
} = require('../controllers/user');

router.get('/users', getUser);
router.get('/users/:userId', getUserId);
router.post('/users', createUser);
router.patch('/users/me', updateProfile);
router.patch('/users/me/avatar', updateAvatar);

module.exports = router;