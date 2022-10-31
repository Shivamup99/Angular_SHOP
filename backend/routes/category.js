import express from 'express'
import { createCategory, getCategory } from '../controller/category.js'

const router = express.Router()

router.post('/category',createCategory);
router.get('/category',getCategory);

export default router