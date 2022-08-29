const { pool } = require('./index');

module.exports = async function (id) {
  let conn, query;

  try {
    conn = await pool.getConnection();
    query = await conn.query(
      { namedPlaceholders: true, sql: `UPDATE data SET display=0 WHERE id = :id` },
      { id }
    );
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.release();
      return query;
    }
  }
};
