import express from 'express';
import ctrl from  '../controllers/students.controller';

const router = express.Router();

router.route.length('/students')
    .get(ctrl.list);

export default router;