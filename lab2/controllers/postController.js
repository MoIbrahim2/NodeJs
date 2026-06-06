const postServices = require('../services/postServices')

exports.getAllPosts = async (req, res) => {
    const posts = await postServices.getAllPosts()
    res.status(200).json(posts)
}

exports.getPostById = async (req, res) => {
    const post = await postServices.getPostById(parseInt(req.params.id))
    if (post) {
        res.status(200).json(post)
    } else {
        res.status(404).json({ message: 'Post not found' })
    }
}

exports.createPost = async (req, res) => {
    const newPost = await postServices.createPost(req.body)
    res.status(201).json(newPost)
}

exports.updatePost = async (req, res) => {
    const updatedPost = await postServices.updatePost(parseInt(req.params.id), req.body)
    if (updatedPost) {
        res.status(200).json(updatedPost)
    } else {
        res.status(404).json({ message: 'Post not found' })
    }
}

exports.deletePost = async (req, res) => {
    const success = await postServices.deletePost(parseInt(req.params.id))
    if (success) {
        res.status(204).send()
    } else {
        res.status(404).json({ message: 'Post not found' })
    }
}

