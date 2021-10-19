const express = require('express')
const userController = require('../controllers/userController.js')
const productController = require('../controllers/productControllers.js')
const categoryController = require('../controllers/categoryController.js')
const wishlistController = require('../controllers/wishlistController')
const messageController = require('../controllers/messagesController.js')
const authentication = require('../middlewares/authentication.js')
const errorHandler = require('../middlewares/errorHandler.js')
const router = express.Router()

router.post('/login', userController.login)
router.post('/register', userController.register)

router.get('/categories', categoryController.findAll)
router.get('/categories/:id', categoryController.findByPk)

router.get('/messages', messageController.findAll)
router.post('/messages', messageController.create)
router.delete('/messages/:id', messageController.delete)

router.get('/products', productController.findAll)
router.get('/products/:id', productController.findByPk)
// router.post('/products', productController.create)
// router.put('/products/:id', productController.update)
// router.delete('/products/:id', productController.delete)

router.use(authentication)

router.get('/wishlist', wishlistController.findAll)
router.post('/wishlist/:productId', wishlistController.create)
router.delete('/wishlist/:id', wishlistController.delete)

router.use(errorHandler)

module.exports = router
