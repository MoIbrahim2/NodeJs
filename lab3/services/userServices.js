const User = require('../models/User')



const getAllUsers = async () => {
    return await User.find()
}

const getUserById = async (id) => {
    const user = await User.findOne({ _id: id })
    return user
}

const createUser = async (userData) => {
    return await User.create(userData)
}

const updateUser = async (id, userData) => {
    const user = await User.findOneAndUpdate({ _id: id }, userData, { new: true })
    return user
}

const deleteUser = async (id) => {
    await User.findOneAndDelete({ _id: id })
    return true
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}