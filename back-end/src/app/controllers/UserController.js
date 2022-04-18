import UsersRepository from '../repositories/UsersRepository.js';
import UsersDocumentsRepository from '../repositories/UsersDocumentsRepository.js';

class UserController {
  async index(request, response) {
    const users = await UsersRepository.findAll();
    return response.status(200).json(users);
  }

  async show(request, response) {
    const { user } = request;

    const userDocuments = await UsersDocumentsRepository.getDocumentsByUserId(user.id);

    user.documents = userDocuments;

    return response.status(200).json(user);
  }

  async store(request, response) {
    const newUser = await UsersRepository.create();
    return response.status(201).json(newUser);
  }

  async delete(request, response) {
    const { id: userId } = request;

    await UsersRepository.delete(userId);

    return response.sendStatus(204);
  }
}

export default new UserController();
