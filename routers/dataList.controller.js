const listData = require('../db/listData');

module.exports = async function (req, res) {
  const result = await listData();

  return res.send(result);
};
