/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

const handleAuthError = (next) => {
  next(new UnauthorizedError('Необходима авторизация.'));
};

const extractBearerToken = (header) => header.replace('Bearer ', '');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return handleAuthError(next);
  }
  const token = extractBearerToken(authorization);
  let payload;
  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    return handleAuthError(next);
  }
  req.user = payload; // записываем пейлоуд в объект запроса
  next(); // пропускаем запрос дальше
};
