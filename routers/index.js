const express = require('express');
const Router = express.Router();

Router.use('/', express.static('./client', { extensions: ['html'] }));

Router.post('/generate/pdf/:template', [], require('./generatePDF.controller'));

module.exports = Router;
