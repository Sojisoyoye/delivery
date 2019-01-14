import express from 'express';
import PackageController from '../controllers/packagecontrollers';

const router = express.Router();

router.post('/api/v1/pckgs', PackageController.create);
router.get('/api/v1/pckgs', PackageController.getAll);
router.get('/api/v1/pckgs/:id', PackageController.getOne);
router.delete('/api/v1/pckgs/:id', PackageController.delete);
// router.put('/api/v1/pckgs/:id', packageController.update);

export default router;
