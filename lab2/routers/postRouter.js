const Router = require('express').Router()
const postController = require('../controllers/postController')

Router.get('/', postController.getAllPosts)
Router.get('/:id', postController.getPostById)
Router.post('/', postController.createPost)
Router.put('/:id', postController.updatePost)
Router.delete('/:id', postController.deletePost)

module.exports = Router