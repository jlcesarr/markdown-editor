import db from '../../database/index.js';

class UsersDocumentsRepository {
  async getDocumentsByUserId(userId) {
    const rows = await db.query(`
      SELECT id, name, content, created_at
      FROM documents
       WHERE user_id = $1
    `, [userId]);
    return rows;
  }

  async create({ userId, documentId }) {
    const [row] = await db.query(`
      INSERT INTO user_documents(user_id, document_id)
      VALUES($1, $2)
      RETURNING *
    `, [userId, documentId]);
    return row;
  }
}

export default new UsersDocumentsRepository();
