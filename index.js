require('dotenv').config();
const PORT = process.env.PORT || 5000;

const express = require('express');
const parser = require('body-parser');
const app = express();

app.use(parser.json());
app.use(parser.urlencoded());
app.use(require('./routers'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
