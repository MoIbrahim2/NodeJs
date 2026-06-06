const Router = require('express').Router()
const postController = require('../controllers/postController')
const validator = require('../middlewares/validator')
const { createPostSchema, updatePostSchema } = require('../validators/postSchemas')

Router.get('/', postController.getAllPosts)
Router.get('/:id', postController.getPostById)
Router.post('/', validator(createPostSchema), postController.createPost)
Router.put('/:id', validator(updatePostSchema), postController.updatePost)
Router.delete('/:id', postController.deletePost)

module.exports = Router