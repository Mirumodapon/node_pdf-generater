const Router = require('express').Router();

Router.get('/', (_, res) => res.status(204).send('No Content.'));

Router.post('/generate/pdf/:template', [], require('./generatePDF.controller'));

module.exports = Router;
