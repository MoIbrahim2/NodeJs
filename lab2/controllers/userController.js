const userServices = require('../services/userServices')

exports.getAllUsers = async (req, res) => {
    const users = await userServices.getAllUsers()
    res.status(200).json(users)
}

exports.getUserById = async (req, res) => {
    const user = await userServices.getUserById(parseInt(req.params.id))
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
}

exports.createUser = async (req, res) => {
    const newUser = await userServices.createUser(req.body)
    res.status(201).json(newUser)
}

exports.updateUser = async (req, res) => {
    const updatedUser = await userServices.updateUser(parseInt(req.params.id), req.body)
    if (updatedUser) {
        res.status(200).json(updatedUser)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
}

exports.deleteUser = async (req, res) => {
    const success = await userServices.deleteUser(parseInt(req.params.id))
    if (success) {
        res.status(204).send()
    } else {
        res.status(404).json({ message: 'User not found' })
    }
}

