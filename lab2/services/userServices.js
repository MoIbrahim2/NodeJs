const fs = require('fs').promises
const path = require('path')

const usersFilePath = path.join(__dirname, '../models/users.json')

const getAllUsers = async () => {
    const data = await fs.readFile(usersFilePath, 'utf-8')
    return JSON.parse(data)
}

const getUserById = async (id) => {
    const users = await getAllUsers()
    return users.find(user => user.id === id)
}

const createUser = async (userData) => {
    const users = await getAllUsers()
    const newUser = { id: users.length > 0 ? Math.max(...users.map(u => parseInt(u.id))) + 1 : 1, ...userData }
    users.push(newUser)
    await fs.writeFile(usersFilePath, JSON.stringify(users))
    return newUser
}

const updateUser = async (id, userData) => {
    const users = await getAllUsers()
    const userIndex = users.findIndex(user => user.id === id)
    if (userIndex === -1) return null
    users[userIndex] = { ...users[userIndex], ...userData }
    await fs.writeFile(usersFilePath, JSON.stringify(users))
    return users[userIndex]
}

const deleteUser = async (id) => {
    const users = await getAllUsers()
    const userIndex = users.findIndex(user => user.id === id)
    if (userIndex === -1) return false
    users.splice(userIndex, 1)
    await fs.writeFile(usersFilePath, JSON.stringify(users))
    return true
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}