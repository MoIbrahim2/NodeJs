const Joi = require('joi')

const createUserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    passwordConfirmation: Joi.string().valid(Joi.ref('password')).required().messages({
        'any.only': 'Password confirmation does not match password'
    })
})

const updateUserSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email()
})

module.exports = {
    createUserSchema,
    updateUserSchema
}