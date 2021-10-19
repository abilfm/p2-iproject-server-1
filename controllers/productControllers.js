const { Post, Category } = require('../models/index.js')

class PostController {
  static async findAll (req, res, next) {
    try {
      const posts = await Post.findAll({ include: Category })
      res.status(200).json(posts)
    } catch (err) {
      next(err)
    }
  }

  static async findByPk(req, res, next) {
    try {
      const post = await Post.findByPk(+req.params.id, { include: Category })
      if (post) {
        res.status(200).json(post)
      } else {
        throw { name: 'NOTFOUND_POST' }
      }
    } catch (err) {
      next(err)
    }
  }

  static async create(req, res, next) {
    try {
      const postData = {
        title: req.body.title,
        content: req.body.content,
        imgUrl: req.body.imgUrl,
        authorId: +req.user.id,
        categoryId: +req.body.categoryId,
        status: 'active'
      }

      const newPost = await Post.create(postData)
      await Post.addHistoriesLog("CREATE", newPost.id, req.user.email)
      res.status(201).json(newPost)     
    } catch (err) {
      next(err)
    }
  }

  static async update(req, res, next) {
    try {
      const postDataUpdate = {
        title: req.body.title,
        content: req.body.content,
        imgUrl: req.body.imgUrl,
        categoryId: +req.body.categoryId
      }

      const selectedPost = await Post.findByPk(+req.params.id)
      if (selectedPost) {
        const updatedPost = await Post.update(postDataUpdate, 
          { where: { id: +req.params.id }, returning: {} })
        await Post.addHistoriesLog("UPDATE", selectedPost.id, req.user.email)
        res.status(200).json(updatedPost[1][0])
      } else {
        throw { name: 'NOTFOUND_POST' }
      }
    } catch (err) {
      next(err)
    }
  }

  static async delete(req, res, next) {
    try {
      const selectedPost = await Post.findByPk(+req.params.id)
      if (selectedPost) {
        await Post.destroy({ where: { id: +req.params.id }})
        res.status(200).json({ message: 'Post has successfully been deleted' })
      } else {
        throw { name: 'NOTFOUND_POST' }
      }
    } catch (err) {
      next(err)
    }
  }

  static async patch(req, res, next) {
    try {
      const newStatus = {
        status: req.body.status
      }

      const selectedPost = await Post.findByPk(+req.params.id)
      if (selectedPost) {
        const updatedPost = await Post.update(newStatus, { where: 
          { id: +req.params.id }, returning: {} })
        await Post.addHistoriesLog("PATCH", 
        selectedPost.id, req.user.email, selectedPost.status, newStatus.status)
        res.status(200).json(updatedPost[1][0])
      } else {
        throw { name: 'NOTFOUND_POST' }
      }
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}

module.exports = PostController