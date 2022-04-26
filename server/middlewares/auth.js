const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports = async (req, res, next) => {

    try {
        
        const token = req.cookies.recapcookie
        console.log('auth: token is', token)

        const decoded = jwt.verify(token, process.env.SECRET)

        console.log('auth: decoded is', decoded)

        const user = await User.findById(decoded.id)

        if (!user) return res.send({success: false})

        next()

    } catch (error) {
        console.log('AUTH error:', error.message)
        res.send(error.message)
    }

}