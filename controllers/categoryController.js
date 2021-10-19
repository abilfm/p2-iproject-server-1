const { Product, Category } = require('../models/index.js')

class CategoryController {
  static async findAll (req, res, next) {
    try {
      const categories = await Category.findAll({ include: Post })
      res.status(200).json(categories)
    } catch (err) {
      next(err)
    }
  }

  static async findByPk (req, res, next) {
    try {
      const post = await Category.findByPk(+req.params.id, { include: Post })
      if (post) {
        res.status(200).json(post)
      } else {
        throw { name: 'NOTFOUND_CATEGORY' }
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CategoryController