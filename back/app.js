const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9800;
const app = express();

app.use(bodyParser.urlencoded({
  limit: '500kb',
  extended: true,
  parameterLimit: 5000
}))

app.use(cors())

require('./routes')(app)

app.listen(PORT, () => console.log(`Serving on port ${PORT}`))