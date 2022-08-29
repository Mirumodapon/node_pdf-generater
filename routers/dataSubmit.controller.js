const newData = require('../db/newData');

module.exports = async function (req, res) {
  let A = '',
    B = '';
  for (let i = 0; i < 5; ++i) A += req.body[`A${i}`] === 'true' ? 1 : 0;
  for (let i = 0; i < 7; ++i) B += req.body[`B${i}`] === 'true' ? 1 : 0;

  console.log(req.body);

  req.body.A = A;
  req.body.B = B;
  await newData(req.body);

  return res.redirect('/');
};
