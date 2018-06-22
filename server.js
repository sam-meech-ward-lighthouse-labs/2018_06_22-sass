const express = require('express');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');

const app = express();

app.use(sassMiddleware({
  /* Options */
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public'),
  debug: true,
  outputStyle: 'compressed'
}));

console.log(path.join(__dirname, 'sass'));

app.use(express.static('public'));

app.listen(3000, () => {console.log("Sushi 😎")});