require('dotenv').config();
const PORT = process.env.PORT || 5000;

const express = require('express');
const app = express();

app.use(express.json());
app.use(require('./routers'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
