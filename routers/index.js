const express = require('express');
const Router = express.Router();

Router.use('/', express.static('./client', { extensions: ['html'] }));

Router.get('/data', [], require('./dataList.controller'));
Router.post('/data', [], require('./dataSubmit.controller'));

Router.post('/generate/pdf/:template', [], require('./generatePDF.controller'));

module.exports = Router;
