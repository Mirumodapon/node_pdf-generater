const { pool } = require('./index');

module.exports = async function (data) {
  let conn, query;

  try {
    conn = await pool.getConnection();
    query = await conn.query({
      sql: `SELECT id, name, teacher FROM data;`
    });
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.release();
      return query;
    }
  }
};
