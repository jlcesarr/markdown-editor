import DocumentsRepository from '../repositories/DocumentsRepository.js';
import UsersDocumentsRepository from '../repositories/UsersDocumentsRepository.js';

class DocumentController {
  async index(request, response) {
    const documents = await DocumentsRepository.findAll();
    return response.status(200).json(documents);
  }

  async show(request, response) {
    const { id } = request.params;
    const { id: userId } = request.user;

    const document = await DocumentsRepository.findById(id);

    if (!document) return response.status(404).json({ success: false, error: 'Document not found' });

    const hasAuthorization = document.user_id === userId;

    if (!hasAuthorization) return response.status(403).json({ success: false, error: 'Permissions Denied' });

    return response.status(200).json(document);
  }

  async store(request, response) {
    const { name, content } = request.body;
    const { id: userId } = request.user;

    if (!name || !content) {
      return response.status(400).json({
        success: false,
        error: 'Bad request',
      });
    }

    const newDocument = await DocumentsRepository.create({ name, userId, content });
    await UsersDocumentsRepository.create({ userId, documentId: newDocument.id });

    return response.status(201).json(newDocument);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, content } = request.body;
    const { id: userId } = request.user;

    const document = await DocumentsRepository.findById(id);

    if (!document) return response.status(404).json({ success: false, error: 'Document not found' });

    const hasAuthorization = document.user_id === userId;

    if (!hasAuthorization) return response.status(403).json({ success: false, error: 'Permissions Denied' });

    const updatedDocument = await DocumentsRepository.update(id, { name, content });

    return response.status(200).json(updatedDocument);
  }

  async delete(request, response) {
    const { id } = request.params;
    const { id: userId } = request.user;

    const document = await DocumentsRepository.findById(id);

    if (document) {
      const hasAuthorization = document.user_id === userId;

      if (!hasAuthorization) return response.status(403).json({ success: false, error: 'Permissions Denied' });
    }

    await DocumentsRepository.delete(id);
    return response.sendStatus(204);
  }
}

// Singleton Pattern
export default new DocumentController();
