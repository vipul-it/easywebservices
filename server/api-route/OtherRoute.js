import express from 'express';
import { getOthers, addOther, getOtherById, editOther, deleteOther } from '../controller/other-controller.js';

const OtherRouter = express.Router();

 OtherRouter.get('/', getOthers);
 OtherRouter.post('/add', addOther);
 OtherRouter.get('/:id', getOtherById);
 OtherRouter.put('/:id', editOther);
 OtherRouter.delete('/:id', deleteOther);

export default OtherRouter;