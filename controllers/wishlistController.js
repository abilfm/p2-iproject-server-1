const { Wishlist, Product } = require('../models/index.js')

class WishlistController {
  static async findAll (req, res, next) {
    try {
      const wishlists = await Wishlist.findAll({
        where: { UserId: +req.user.id },
        include: { model: Product }
      })
  
      res.status(200).json(wishlists)
    } catch (err) {
      next(err)
    }
  }

  static async create (req, res, next) {
    try {
      const newWishlist = await Wishlist.create({ 
        UserId: +req.user.id,
        ProductId: +req.params.productId
      })
  
      res.status(201).json(newWishlist)
    } catch (err) {
      next(err)
    }
  }

  static async delete (req, res, next) {
    try {
      const selectedWishlist = await Wishlist.findByPk(+req.params.id)
      if (selectedWishlist) {
        await Wishlist.destroy({ where: { id: +req.params.id } })
        res.status(200).json({ message: 'Your wishlist has successfully been deleted' })
      } else {
        throw { name: 'NOTFOUND_WISHLIST' }
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = WishlistController