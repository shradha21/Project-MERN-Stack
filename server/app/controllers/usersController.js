const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usersController = {}

usersController.signup = (req,res) => {
    const body = req.body
    const user = new User(body)
    user.save()
      .then((user) => {
        res.json(user) 
      })
      .catch((err) => {
        res.json(err)
      })
} 

usersController.login = (req,res) => {
    const body = req.body
    //check if email is present
    User.findOne({ email: body.email })
      .then((user) => {
          if(user) {
              bcryptjs.compare(body.password, user.password)
                .then((result) => {
                    if(result) {
                        const tokenData = {
                            id: user._id
                        }
                        const token = jwt.sign(tokenData, 'secret123' ,{expiresIn: '10d'}) 
    
                        res.json({
                              token: token,
                              
                          })
                    }else {
                        res.json({ errors: 'invalid email/password'})
                    }
                })
          }else {
              res.json({errors: 'invalid email/password'})
          }
      })
      .catch((err) => {
          res.json(err)
      })   
}

//users account
usersController.account = (req,res) => {
    User.findById(req.userId)
      .then((user) => {
          res.json(user)
      })
      .catch((err) => {
          res.json(err )
      })
}

//list of all the users
usersController.list = (req,res) => {
    User.find()
      .then((users) => {
          res.json(users)
      })
      .catch((err) => {
          res.json(err)
      })
}

//delete the user
usersController.logout = (req, res) => {
    const user = req.user
    const token = req.token
    User.findByIdAndDelete(user, { $pull: { tokens: { token }}})
      .then(function() {
          res.json({ message : 'successfully logged out' })
      })
      .catch((err) => {
          res.json(err)
      })
}

module.exports = usersController