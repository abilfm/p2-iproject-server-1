const { Product, Category } = require('../models/index.js')

class CategoryController {
  static async findAll (req, res, next) {
    try {
      const categories = await Category.findAll({ include: Product })
      res.status(200).json(categories)
    } catch (err) {
      next(err)
    }
  }

  static async findByPk (req, res, next) {
    try {
      const product = await Category.findByPk(+req.params.id, { include: Product })
      if (product) {
        res.status(200).json(product)
      } else {
        throw { name: 'NOTFOUND_CATEGORY' }
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CategoryController