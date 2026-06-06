const userController = require('../controllers/userController')
const router = require('express').Router()
const validator = require('../middlewares/validator')
const { createUserSchema, updateUserSchema } = require('../validators/userSchemas')
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.post('/', validator(createUserSchema), userController.createUser)
router.patch('/:id', validator(updateUserSchema), userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router