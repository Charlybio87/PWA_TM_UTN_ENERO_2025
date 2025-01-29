import express from 'express'
import { updateUserInfoController } from '../controllers/profile.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const profileRouter = express.Router()

profileRouter.put('/', authMiddleware, updateUserInfoController )

export default profileRouter