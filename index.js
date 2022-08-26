require('dotenv').config();
const PORT = process.env.PORT || 5000;

const express = require('express');
const app = express();

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
