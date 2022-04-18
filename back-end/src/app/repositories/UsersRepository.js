import db from '../../database/index.js';

class UsersRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM users');
    return rows;
  }

  //   SELECT id, i.title AS item_title, t.tag_array
  // FROM   items      i
  // JOIN  (  -- or LEFT JOIN ?
  //    SELECT it.item_id AS id, array_agg(t.title) AS tag_array
  //    FROM   items_tags it
  //    JOIN   tags       t  ON t.id = it.tag_id
  //    GROUP  BY it.item_id
  //    ) t USING (id);

  async findById(userId) {
    const [row] = await db.query(`
        SELECT *
        FROM users
        WHERE users.id = $1
    `, [userId]);

    return row;
  }

  async create() {
    const [row] = await db.query(`
      INSERT INTO users(id)
      VALUES(DEFAULT)
      RETURNING *
    `);
    return row;
  }

  async delete(userId) {
    await db.query(`
      DELETE FROM users
      WHERE id = $1
    `, [userId]);
  }
}

export default new UsersRepository();
