const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const upload = multer();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/', upload.fields([]), (req, res) => {
  console.log(req.body.quform_2_6);
  console.log(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3000');
});
