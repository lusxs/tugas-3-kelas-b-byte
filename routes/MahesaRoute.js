import express from 'express';
import { 
    createMahesa, 
    deleteMahesa, 
    getMahesas, 
    getMahesaById, 
    updateMahesa 
} from '../controller/mahesa.js';

const router  = express.Router();

router.get('/mahesas', getMahesas);
router.get('/mahesa/:id', getMahesaById);
router.post('./mahesa', createMahesa);
router.patch('/mahesa/:id', updateMahesa);
router.delete('/mahesa/:id', deleteMahesa);

export default router;