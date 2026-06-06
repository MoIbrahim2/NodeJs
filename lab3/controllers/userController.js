const userServices = require('../services/userServices')
const APIError = require('../utils/APIError')
exports.getAllUsers = async (req, res) => {
    const users = await userServices.getAllUsers()
    res.status(200).json(users)
}

exports.getUserById = async (req, res,next) => {
    const user = await userServices.getUserById(req.params.id)
    if (user) {
        res.status(200).json(user)
    } else {
        next(new APIError(404, 'User not found'))
    }
}

exports.createUser = async (req, res) => {
    const newUser = await userServices.createUser(req.body)
    if (!newUser) {
        next(new APIError(400, 'Failed to create user'))
    }
    res.status(201).json(newUser)
}

exports.updateUser = async (req, res) => {
    const updatedUser = await userServices.updateUser(req.params.id, req.body)
    if (updatedUser) {
        res.status(200).json(updatedUser)
    } else {
        next(new APIError(404, 'User not found'))
    }
}

exports.deleteUser = async (req, res,next) => {
    const success = await userServices.deleteUser(req.params.id)
    if (success) {
        res.status(204).send()
    } else {
        next(new APIError(404, 'User not found'))
    }
}

