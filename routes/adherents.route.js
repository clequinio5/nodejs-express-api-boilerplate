import express from 'express'
import adherentsController from '../controllers/adherents.controller'

const router = express.Router();

router.get('/', adherentsController.getAdherents)
router.get('/:id', adherentsController.getAdherentById)

export default router