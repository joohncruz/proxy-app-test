const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const regexApp2 = RegExp('/react*');

const buildApp1 = 'app1/build';
const entryFileApp1 = 'index.html';

const buildApp2 = 'app2/build';
const entryFileApp2 = 'index.html';

app.use(express.static(path.join(__dirname, buildApp1)));
app.use(express.static(path.join(__dirname, buildApp2)));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, buildApp1, entryFileApp1));
});

app.get(regexApp2, function (req, res) {
  res.sendFile(path.join(__dirname, buildApp2, entryFileApp2));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.warn(`Server running on port: ${port}`);
});