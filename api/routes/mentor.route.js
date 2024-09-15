import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { applyAsMentor, getMentors, deleteMentor, updateMentor, assignMentor, approveMentor } from '../controllers/mentor.controller.js';

const router = express.Router();

router.post('/apply', verifyToken, applyAsMentor);
router.get('/getmentors', getMentors);
router.delete('/deletementor/:mentorId', verifyToken, deleteMentor);
router.put('/updatementor/:mentorId', verifyToken, updateMentor);
router.put('/assignmentor/:mentorId', verifyToken, assignMentor);
router.put('/approvementor/:mentorId', verifyToken, approveMentor);


export default router;