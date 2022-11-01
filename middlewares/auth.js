/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../errors/UnauthorizedError');

const handleAuthError = (req, res, next) => {
  res
    .status(401)
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError('Необходима авторизация.');
      }
      res.send(user);
    })
    .catch(next);
};

const extractBearerToken = (header) => header.replace('Bearer ', '');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return handleAuthError(res);
  }
  const token = extractBearerToken(authorization);
  let payload;
  try {
    payload = jwt.verify(token, 'super-strong-secret');
  } catch (err) {
    return handleAuthError(res);
  }
  req.user = payload; // записываем пейлоуд в объект запроса
  next(); // пропускаем запрос дальше
};
