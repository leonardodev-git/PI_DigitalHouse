const jwt = require('jsonwebtoken')
const config = require('../config/jwtConfig')
const models = require('../models')

const user = models.cliente

const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"]

    if (!token) {
        return res.status(403).json({
            message: "Token not found"
        })
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "Token validation error, not auto-authorized"
            })
        }
        req.userId = decoded.id
        next()
    })
}

module.exports = {
    verifyToken,
}