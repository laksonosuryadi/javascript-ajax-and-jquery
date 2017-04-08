const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const index = require('./routes/index');

const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/', index);

app.listen(3000, function(){
  console.log('app is up and listening on port 3000');
})

module.exports = app;
