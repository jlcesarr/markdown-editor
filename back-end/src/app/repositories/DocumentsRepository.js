import db from '../../database/index.js';

class DocumentsRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM documents');
    return rows;
  }

  async findById(documentId) {
    const [row] = await db.query('SELECT * FROM documents WHERE id = $1', [documentId]);
    return row;
  }

  async create({ name, content, userId }) {
    const [row] = await db.query(`
      INSERT INTO documents(name, content, user_id)
      VALUES($1, $2, $3)
      RETURNING *
    `, [name, content, userId]);

    return row;
  }

  async update(documentId, { name, content }) {
    const [row] = await db.query(`
      UPDATE documents
      SET name = $1, content = $2
      WHERE id = $3
      RETURNING *
      `, [name, content, documentId]);
    return row;
  }

  async delete(documentId) {
    await db.query(`
      DELETE FROM documents
      WHERE id = $1
    `, [documentId]);
  }
}

export default new DocumentsRepository();
