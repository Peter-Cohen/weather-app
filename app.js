const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
