const { Product, Category } = require('../models/index.js')

class ProductController {
  static async findAll (req, res, next) {
    try {
      const products = await Product.findAll({ include: Category })
      res.status(200).json(products)
    } catch (err) {
      next(err)
    }
  }

  static async findByPk(req, res, next) {
    try {
      const product = await Product.findByPk(+req.params.id, { include: Category })
      if (product) {
        res.status(200).json(product)
      } else {
        throw { name: 'NOTFOUND_PRODUCT' }
      }
    } catch (err) {
      next(err)
    }
  }

  // static async create(req, res, next) {
  //   const dataProduct = {
  //     brand_name: req.body.brand_name,
  //     product_name: req.body.product_name,
  //     size: req.body.size,
  //     bpom_number: req.body.bpom_number,
  //     description: req.body.description,
  //     how_to_use: req.body.how_to_use,
  //     ingredients_list: req.body.ingredients_list,
  //     image_URL: req.body.image_URL,
  //     marketplace_URL: req.body.marketplace_URL,
  //     social_media_URL: req.body.social_media_URL,
  //     CategoryId: req.body.CategoryId
  //   }

  //   try {
  //     const newProduct = await Product.create(dataProduct)
  //     res.status(201).json(newProduct)
  //   } catch (err) {
  //     next (err)
  //   }
  // }

  // static async update(req, res, next) {
  //   const updateDataProduct = {
  //     brand_name: req.body.brand_name,
  //     product_name: req.body.product_name,
  //     size: req.body.size,
  //     bpom_number: req.body.bpom_number,
  //     description: req.body.description,
  //     how_to_use: req.body.how_to_use,
  //     ingredients_list: req.body.ingredients_list,
  //     image_URL: req.body.image_URL,
  //     marketplace_URL: req.body.marketplace_URL,
  //     social_media_URL: req.body.social_media_URL,
  //     CategoryId: req.body.CategoryId
  //   }

  //   try {
  //     const selectedProduct = await News.findByPk(req.params.id)
  //     if (selectedProduct) {
  //       const updatedProduct = await Product.update(updateDataProduct, { where: { id: req.params.id, } })
  //       res.status(200).json(updatedProduct[1][0])
  //     } else {
  //       throw { name: "NOTFOUND_PRODUCT" }
  //     }
  //   } catch (err) {
  //     next(err)
  //   }
  // }

  // static async delete(req, res, next) {
  //   try {
  //     const selectedProduct = await Product.findByPk(req.params.id)
  //     if (selectedProduct) {
  //       await Product.destroy({ where: { id: req.params.id } })
  //       res.status(200).json({ message: "Product has successfully been deleted" })
  //     } else {
  //       throw { name: "NOTFOUND_PRODUCT" }
  //     }
  //   } catch (err) {
  //     next(err)
  //   }
  // }
}

module.exports = ProductController