const { readFileSync, readdirSync } = require('fs');
const convertToPDF = require('../utils/convertToPDF');
const getDetailData = require('../db/getDetailData');

async function generatePdfController(req, res) {
  try {
    const [data] = await getDetailData(req.query.id);

    for (let i = 0; i < 6; ++i) data[`A${i}`] = data.A.charAt(i) === '1' ? 'V' : 'X';
    for (let i = 0; i < 8; ++i) data[`B${i}`] = data.B.charAt(i) === '1' ? 'checked' : '';

    const result = await convertToPDF(
      readFileSync(`./template/evaluation.html`, { encoding: 'utf-8' }),
      data
    );

    // return res.send(data);

    res.set('Content-Type', 'application/pdf');
    return res.status(200).send(result);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error.');
  }
}

module.exports = generatePdfController;
