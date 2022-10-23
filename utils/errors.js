/* eslint-disable consistent-return */
const ERROR_CODE = 400;
const ERROR_NOT_FOUND = 404;
const ERROR_STANDART = 500;

module.exports.errorsCatch = (err, res) => {
  if (err.name === 'CastError') { return res.status(ERROR_CODE.send({ message: `Произошла ошибка ${ERROR_CODE}` })); }
  if (err.name === 'Bad request') { return res.status(ERROR_NOT_FOUND).send({ message: `Произошла ошибка ${ERROR_NOT_FOUND}` }); }
  if (err.name === 'Internal Server') { return res.status(ERROR_STANDART).send({ message: `Произошла ошибка ${ERROR_STANDART}` }); }
};
