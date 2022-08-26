const { readFileSync, readdirSync } = require('fs');
const convertToPDF = require('../utils/convertToPDF');

function generatePdfController(req, res) {
  try {
    const path = req.params.template;

    if (!path) throw { code: '400' };
    if (!readdirSync('./template').includes(path)) throw { code: '400' };

    const result = convertToPDF(
      readFileSync(`./template/${path}`, { encoding: 'utf-8' }),
      req.body
    );

    res.set('Content-Type', 'application/pdf');
    return res.status(200).send(result);
  } catch (err) {
    switch (err.code) {
      case 'ENOENT':
      case '400':
        return res.status(400).send('Bad Require.');
      default:
        console.error(err.message);
        console.error(err.code);
        return res.status(500).send('Internal Server Error.');
    }
  }
}

module.exports = generatePdfController;
