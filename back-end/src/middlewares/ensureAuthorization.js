/* eslint-disable func-names */
import UsersRepository from '../app/repositories/UsersRepository.js';

// eslint-disable-next-line consistent-return
export default async function (request, response, next) {
  const userId = request.headers['x-user-id'];
  if (!userId) return response.status(400).json({ success: false, error: 'Missing User Authorization' });

  const userExists = await UsersRepository.findById(userId);

  if (!userExists) return response.status(401).json({ success: false, error: 'Invalid User Authorization' });

  request.user = userExists;
  next();
}
