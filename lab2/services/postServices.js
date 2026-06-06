const fs = require('fs').promises
const path = require('path')

const postsFilePath = path.join(__dirname, '../models/posts.json')

const getAllPosts = async () => {
    const data = await fs.readFile(postsFilePath, 'utf-8')
    return JSON.parse(data)
}

const getPostById = async (id) => {
    const posts = await getAllPosts()
    return posts.find(post => post.id === id)
}

const createPost = async (postData) => {
    const posts = await getAllPosts()
    const newPost = { id: posts.length > 0 ? Math.max(...posts.map(u => parseInt(u.id))) + 1 : 1, ...postData }
    posts.push(newPost)
    await fs.writeFile(postsFilePath, JSON.stringify(posts))
    return newPost
}

const updatePost = async (id, postData) => {
    const posts = await getAllPosts()
    const postIndex = posts.findIndex(post => post.id === id)
    if (postIndex === -1) return null
    posts[postIndex] = { ...posts[postIndex], ...postData }
    await fs.writeFile(postsFilePath, JSON.stringify(posts))
    return posts[postIndex]
}

const deletePost = async (id) => {
    const posts = await getAllPosts()
    const postIndex = posts.findIndex(post => post.id === id)
    if (postIndex === -1) return false
    posts.splice(postIndex, 1)
    await fs.writeFile(postsFilePath, JSON.stringify(posts))
    return true
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}