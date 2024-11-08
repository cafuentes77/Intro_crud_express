import express from 'express';
import { createItem, getAllItems } from '../controller/fileController.js';

const router = express.Router();

router.post ('/data', createItem)
router.get ('/data', getAllItems)

export default router