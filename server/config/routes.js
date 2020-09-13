const express = require('express')
const router = express.Router()

const uploads = require('../app/middlewares/imageUploads')

const { authenticateUser } = require('../app/middlewares/authentication')

const usersController = require('../app/controllers/usersController')
const postsController = require('../app/controllers/postsController')

//user
router.post('/users/signup', usersController.signup )
router.post('/users/login', usersController.login)
router.get('/users', usersController.list)

//private route
router.get('/users/account', authenticateUser, usersController.account)
router.delete('/users/logout',authenticateUser,usersController.logout)

//posts
router.get('/allposts', postsController.list)
router.post('/post/create', authenticateUser, uploads.single('image'),postsController.create)
router.get('/posts/my', authenticateUser, postsController.myPosts)
router.put('/post/:id', authenticateUser, postsController.update)
router.delete('/post/:id', authenticateUser, postsController.destory)

//likes
//router.put('/postlike/:id', authenticateUser, postsController.updatelike)
//router.put('/postunlike/:id', authenticateUser, postsController.updateunlike)


module.exports = router