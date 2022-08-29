const { pool } = require('./index');
const uuid = require('uuid');

module.exports = async function (data) {
  let conn, query;

  data.id = uuid.v4();

  try {
    conn = await pool.getConnection();
    query = await conn.query(
      {
        namedPlaceholders: true,
        sql: `INSERT INTO data (
          id, acad, teacher, grade, credit, math, theory, implement, general,
          time, A, B, BO, avg, rate, name
        ) VALUES (
          :id, :acad, :teacher, :grade, :credit, :math, :theory, :implement, :general,
          :time, :A, :B, :BO, :avg, :rate, :name
        );`
      },
      data
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
