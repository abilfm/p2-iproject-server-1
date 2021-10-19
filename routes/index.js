const express = require('express')
const userController = require('../controllers/userController.js')
const productController = require('../controllers/productControllers.js')
const categoryController = require('../controllers/categoryController.js')
const customerController = require('../controllers/customerController')
const controllerMessages = require('../controllers/messagesController.js')
const authentication = require('../middlewares/authentication.js')
const errorHandler = require('../middlewares/errorHandler.js')
const router = express.Router()

router.post('/login', userController.login)
router.post('/register', userController.register)

router.get('/categories', categoryController.findAll)
router.get('/categories/:id', categoryController.findByPk)

router.get('/messages', controllerMessages.findAll)
router.post('/messages', controllerMessages.create)
router.delete('/messages/:id', controllerMessages.delete)

router.get('/products', productController.findAll)
router.get('/products/:id', productController.findByPk)
router.post('/products', productController.create)
router.put('/products/:id', productController.update)
router.delete('/products/:id', productController.delete)

router.use(authentication)

router.get('/wishlist', customerController.customerFavorites)
router.post('/wishlist/:productId', customerController.createFavorites)

router.use(errorHandler)

module.exports = router
