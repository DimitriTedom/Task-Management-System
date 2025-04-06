import { Router } from 'express';

import {
	createTask,
	getAllTasks,
	editTask,
	deleteTask
} from '../controllers/task.controller';

const router = Router();

router.post('/add', createTask);
router.put('/edit/:id', editTask);
router.get('/get', getAllTasks);
router.delete('/delete/:id', deleteTask);

export default router;