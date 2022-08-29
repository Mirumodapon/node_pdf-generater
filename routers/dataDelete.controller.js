const deleteData = require('../db/deleteData');

module.exports = async function (req, res) {
  await deleteData(req.params.id);

  return res.status(204).send('No Content.');
};
