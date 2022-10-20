const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listening on port ${PORT}`)
})

app.use('/', require('./routers/user'));
app.use('/', require('./routers/card'));

app.use((req, res, next) => {
  req.user = {
    _id: '63510c1b738290dc89d2156a' // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});

mongoose.connect('mongodb://localhost:27017/mestodb');


module.exports.createCard = (req, res) => {
  console.log(req.user._id); // _id станет доступен
};

//module.exports = mongoose.model('mestodb', mestodb);

// 63510c1b738290dc89d2156a