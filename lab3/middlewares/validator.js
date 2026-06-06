const APIError = require('../utils/APIError')
module.exports = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body)
        if (error) {
            return next(new APIError(400, error.details[0].message))
        }
        next()
    }
}