const { User } = require('..//models/index')
const { checkToken } = require('../helpers/jwt')

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.access_token
    if (token) {
      const verifiedToken = checkToken(token)
      if (verifiedToken) {
        const verifiedUser = await User.findOne({ 
          where: { email: verifiedToken.email, role: verifiedToken.role }
        })
        if (verifiedUser) {
          req.user = { 
            id: verifiedUser.id, 
            username: verifiedUser.username, 
            email: verifiedUser.email, 
            role: verifiedUser.role
          }
          
          next()
        } else {
          throw{ name: 'UNAUTHORIZED_ACCESS'}
        }
      } else {
        throw{ name: 'JsonWebTokenError'}
      }
    } else {
      throw{ name: 'REQUIRED_TOKEN'}
    }
  } catch (err) {
    next(err)
  }
}

module.exports = authentication