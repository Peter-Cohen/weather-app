const express = require('express');
const path = require('path');
const ejs = require('ejs');
const routes = require('./routes/routes.js');

const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);


app.listen(port, () => console.log(`Server listening on port ${port}`));
