const ERROR_CODE = 400;
const ERROR_NOT_FOUND = 404;
const ERROR_STANDART = 500;

module.exports.errorsCatch = (err) => {

  if (err.statusCode === 400) { return res.status(ERROR_CODE).send({ message: `Произошла ошибка ${ERROR_CODE}` }) };
  if (err.statusCode === 404) { return res.status(ERROR_NOT_FOUND).send({ message: `Произошла ошибка ${ERROR_NOT_FOUND}` }) };
  if (err.statusCode === 500) { return res.status(ERROR_STANDART).send({ message: `Произошла ошибка ${ERROR_STANDART}` }) };
}