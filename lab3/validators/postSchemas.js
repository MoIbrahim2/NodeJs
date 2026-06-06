const Joi = require('joi')

const createPostSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    author: Joi.string().hex(24).required().messages({
        'string.hex': 'Author must be a valid MongoDB User ID ObjectId'
    })
})

const updatePostSchema = Joi.object({
    title: Joi.string(),
    content: Joi.string()
})

module.exports = {
    createPostSchema,
    updatePostSchema
}