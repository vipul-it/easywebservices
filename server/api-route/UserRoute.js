import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser } from '../controller/user-controller.js';

const UserRouter = express.Router();

 UserRouter.get('/', getUsers);
 UserRouter.post('/add', addUser);
 UserRouter.get('/:id', getUserById);
 UserRouter.put('/:id', editUser);
 UserRouter.delete('/:id', deleteUser);

export default UserRouter;