import express from 'express';
import { 
    createMahesa, 
    deleteMahesa, 
    getMahesa, 
    getMahesaById, 
    updateMahesa 
} from '../controller/mahesa.js';

const router  = express.Router();

router.get('/mahesas', getMahesa);
router.get('/mahesa/:id', getMahesaById);
router.post('/mahesa', createMahesa);
router.patch('/mahesa/:id', updateMahesa);
router.delete('/mahesa/:id', deleteMahesa);

export default router;