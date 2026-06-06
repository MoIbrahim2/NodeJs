const Post = require('../models/Post')

const getAllPosts = async () => {
    return await Post.find()
}

const getPostById = async (id) => {
    return await Post.findById(id).populate('author', 'name email') // Populate author details
}

const createPost = async (postData) => {
    const post = await Post.create(postData)
    return post
}

const updatePost = async (id, postData) => {
    const post = await Post.findByIdAndUpdate(id, postData, { new: true })
    return post
}

const deletePost = async (id) => {
    const post = await Post.findByIdAndDelete(id)
    return post
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}