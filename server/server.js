const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/', (req, res) => {
  console.log(req, 'asdasd');
  res.send('12312312321');
});

app.listen(port, () => console.log('worked??????????'));
