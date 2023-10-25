import { Router } from 'express'
import { createUser, getUsers, updateUser,deleteUser, getOneUser } from '../controllers/user.controllers'

const router = Router()
router.post('/users', createUser)
router.get('/', getUsers)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)
router.get('/users/:id', getOneUser)
export default router