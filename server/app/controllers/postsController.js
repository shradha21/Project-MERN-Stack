const Post = require('../models/post')
const postsController = {}

//list of all the users
postsController.list = (req,res) => {
    Post.find()
      .then((posts) => {
          res.json(posts)
      })
      .catch((err) => {
          res.json(err)
      })
}


//create posts
postsController.create = (req,res) => {
    const body = req.body
    const post = new Post(body)
    post.image = req.file.path
    post.userId = req.userId

    post.save()
      .then((post) => {
          res.json(post)
      })
      .catch((err) => {
          res.json(err)
    })
}


//my posts
postsController.myPosts = (req,res) => {
    const userId = req.userId
    Post.find({ userId}) 
    .populate("user", "_id name")
      .then((post) => {
          res.json(post)
      })
      .catch((err) => {
          res.json(err)
      })
}

//delete post
postsController.destory = (req,res) => {
    const id = req.params.id
    Post.findOneAndDelete({_id:id, userId: req.userId})
     .then((post) => {
        if(post){
             res.json(post)
        }else {
            res.json({})
        }
     })
}

//update the post
postsController.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    Post.findOneAndUpdate({ _id: id , userId: req.userId }, body, { new: true, runValidators: true})
      .then((post) => {
          if(post) {
              res.json(post)
          }else {
              res.json({
                  err: 'post not found'
              })
          }
      })
      .catch((err) => {
          res.jon(err)
      })
}



//likes update
// postsController.updatelike = (req,res) => {
//     const id = req.params.id
//     Post.findByIdAndUpdate({_id: id,
//         $push: { likes: req.userId }
//     }, {new: true, runValidators: true})
//      .populate("postedBy", "_id,name")
//       .then((like) => {
//           if(like) {
//             res.json(like)
//           }else {
//             res.json({})
//           }
//       })
// }

//unlike update
// postsController.updateunlike = (req,res) => {
//     Post.findByIdAndUpdate(req.body.postId, {
//         $pull: { likes: req.userId }
//     }, {new: true, runValidators: true}
//     )
//      .populate("postedBy", "_id,name")
//       .then((unlike) => {
//           if(unlike) {
//             res.json(unlike)
//           }else {
//             res.json({})
//           }
//       })
// }


module.exports = postsController