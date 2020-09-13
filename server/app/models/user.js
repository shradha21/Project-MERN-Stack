const mongoose = require('mongoose') 
const isEmail = require('validator/lib/isEmail')
const bcryptjs = require('bcryptjs')
const Schema = mongoose.Schema

//create a schema
const userSchema = new Schema({
        name : {
            type: String,
            required: [true, 'name is required']
            
        },
        email: {
            type: String,
            required: [true, 'email is required'],
            unique: true,
            validate: {
                validator: function(value) {
                    return isEmail(value)
                },
                message: function() {
                    return 'invalid email format'
                }
            }
        },
        password: {
            type: String,
            required: [true, 'password needs to within 8-128 character'],
            minlength: 8,
            maxlength: 128
        }
})

//pre-save in the db
userSchema.pre('save', function(next) {
    const user = this
    bcryptjs.genSalt()
     .then((salt) => {
         bcryptjs.hash(user.password, salt)
           .then((encryptedPassword) => {
               user.password = encryptedPassword
               next()
           })
     })
})


//create a model
const User = mongoose.model('User',userSchema)

module.exports = User

