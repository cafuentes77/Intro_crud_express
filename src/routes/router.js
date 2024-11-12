import express from 'express';
import { createItem, getAllItems, updateItem, deleteItem} from '../controller/fileController.js';

const router = express.Router();

router.post ('/data', createItem)
router.get ('/data', getAllItems)
router.put ('/data/:id', updateItem)
router.delete ('/data/:id', deleteItem)

export default router