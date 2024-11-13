import express from 'express';
import { createItem, getAllItems, updateItem, deleteItem, getItemById, getItemByName} from '../controller/fileController.js';

const router = express.Router();

router.post ('/data', createItem)
router.get ('/data', getAllItems)
router.get('/data/id/:id', getItemById)
router.get('/data/name/:name', getItemByName)
router.put ('/data/:id', updateItem)
router.delete ('/data/:id', deleteItem)

export default router