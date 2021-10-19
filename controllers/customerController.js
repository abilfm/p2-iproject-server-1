const { User, Post, Category, Favorite, Sequelize } = require('../models/index.js')
const { decodePassword } = require('../helpers/bcrypt.js')
const { generateToken } = require('../helpers/jwt.js')
const { Op } = Sequelize;

class CustomerController {
  static async register (req, res, next) {
    try {
      const dataCustomer = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: 'customer',
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
      }

      const newCustomer = await User.create(dataCustomer)
      res.status(201).json({ id: newCustomer.id, email: newCustomer.email })
    } catch (err) {
      next(err)
    }
  }
  
  static async login (req, res, next) {
    try {
      const { email, password } = req.body

      const selectedCustomer = await User.findOne({ where: { email }})
      if (selectedCustomer) {
        const isCustomerPassExist = decodePassword(password, selectedCustomer.password)
        if (isCustomerPassExist) {
          const access_token = generateToken({ id: selectedCustomer.id, email: selectedCustomer.email, role: selectedCustomer.role })
          res.status(200).json({ access_token })
        } else {
          throw { name: 'UNAUTHORIZED_LOGIN' }
        }
      } else {
        throw { name: 'UNAUTHORIZED_LOGIN' }
      }
    } catch (err) {
      next(err)
    }
  }
  
  

  static async customerPosts (req, res, next) {
    const { filter, page, title } = req.query
    const paramQuerySQL = { include: { model: Category } }
    let limit
    let offset

    //Filtering By Title
    
    //Filtering By Category
    if (filter !== '' && typeof filter !== 'undefined') {
      const query = filter.category.split(',').map((item) => ({
        [Op.eq]: item
      }))

      paramQuerySQL.where = {
        categoryId: { [Op.or]: query }
      }
    }

    //Pagination
    if (page !== '' && typeof page !== 'undefined') {
      if (page.size !== '' && typeof page.size !== 'undefined') {
        limit = page.size
        paramQuerySQL.limit = limit
      } 
      
      if (page.number !== '' && typeof page.number !== 'undefined') {
        offset = page.number * limit - limit
        paramQuerySQL.offset = offset
      }
    } else {
      limit = 6
      offset = 0
      paramQuerySQL.limit = limit
      paramQuerySQL.offset = offset
    }

    try {
      const posts = await Post.findAll(paramQuerySQL)
      
      res.status(200).json(posts)
    } catch (err) {
      next(err)
    }
  }

  static async customerPostsById(req, res, next) {
    try {
      const post = await Post.findByPk(+req.params.id, { include: Category })
      if (post) {
        res.status(200).json(post)
      } else {
        throw { name: 'NOTFOUND_POST' }
      }
    } catch (err) {
      next(err)
    }
  }
 
  static async customerFavorites (req, res, next) {
    try {
      const customerFavs = await Favorite.findAll(
        {
          attributes: {
            exclude: [ 'createdAt', 'updatedAt' ]
          },
          where: { customerId: +req.user.id },
          include: { 
            model: Post,
            attributes: {
              exclude: [ 'createdAt', 'updatedAt' ]
            },
            include: { 
              model: Category,
              attributes: {
                exclude: [ 'createdAt', 'updatedAt' ]
              }
            } 
          } 
        }
      )
      
      res.status(200).json(customerFavs)
    } catch (err) {
      next(err)
    }
  }

  static async createFavorites (req, res, next) {
    try {
      const newFavs = await Favorite.create({ 
        customerId: +req.user.id,
        postId: +req.params.postId
      })
  
      res.status(201).json({ 
        id: newFavs.id, 
        customerId: newFavs.customerId,
        postId: newFavs.postId,
      })
    } catch (err) {
      next(err)
    }
  }

  static async deleteFavorites (req, res, next) {
    try {
      const selectedFavs = await Favorite.findByPk(+req.params.id)
      if (selectedFavs) {
        await Favorite.destroy({ where: { id: +req.params.id } })
        res.status(200).json({ message: 'Your favorite has successfully been deleted' })
      } else {
        throw { name: 'NOTFOUND_FAVORITE' }
      }

    } catch (err) {
      next(err)
    }
  }
}

module.exports = CustomerController