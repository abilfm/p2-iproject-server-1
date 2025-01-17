const express = require('express')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
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

passport.use(new FacebookStrategy({
    clientID: process.env.CLIENT_FB_ID,
    clientSecret: process.env.CLIENT_FB_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/fmskincarea"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

router.get('/auth/facebook',
  passport.authenticate('facebook'));

router.get('/auth/facebook/fmskincarea',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

router.get('/messages', messageController.findAll)
router.post('/messages', messageController.create)
router.delete('/messages/:id', messageController.delete)

router.get('/categories', categoryController.findAll)
router.get('/categories/:id', categoryController.findByPk)

router.get('/products/', productController.findAll)
router.get('/products/category/:id', productController.findAllByCategory)
router.get('/products/:id', productController.findByPk)
router.post('/products', productController.create)
router.put('/products/:id', productController.update)
router.delete('/products/:id', productController.delete)

router.use(authentication)

router.get('/wishlists', wishlistController.findAll)
router.post('/wishlists/:productId', wishlistController.create)
router.delete('/wishlists/:id', wishlistController.delete)

router.use(errorHandler)

module.exports = router
