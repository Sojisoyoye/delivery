import express from 'express';
import packageController from '../controllers/packagecontrollers';

const router = express.Router();

router.post('/api/v1/pckgs', packageController.create);
router.get('/api/v1/pckgs', packageController.getAll);
router.get('/api/v1/pckgs/:id', packageController.getOne);
router.put('/api/v1/pckgs/:id', packageController.update);
router.delete('/api/v1/pckgs/:id', packageController.delete);

export default router;
