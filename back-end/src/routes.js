import { Router } from 'express';
import DocumentController from './app/controllers/DocumentController.js';
import UserController from './app/controllers/UserController.js';

import ensureAuthorization from './middlewares/ensureAuthorization.js';

const onlyDevelopment = async (request, response, next) => {
  if (process.env.NODE_ENV === 'production') {
    return response.status(403).json({
      success: false,
      error: 'Forbidden',
    });
  }

  return next();
};

const router = Router();

// DOCUMENTS
router.get('/documents', onlyDevelopment, DocumentController.index);
router.post('/documents', ensureAuthorization, DocumentController.store);
router.get('/documents/:id', ensureAuthorization, DocumentController.show);
router.put('/documents/:id', ensureAuthorization, DocumentController.update);
router.delete('/documents/:id', ensureAuthorization, DocumentController.delete);

// USERS
router.get('/users', onlyDevelopment, UserController.index);
router.get('/users/me', ensureAuthorization, UserController.show);
router.get('/users/:userId', onlyDevelopment, ensureAuthorization, UserController.show);
router.post('/users', UserController.store);

export default router;
