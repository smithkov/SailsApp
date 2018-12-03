/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  /**
   * This method will create a new post for user
   */
  create: function (req, res) {

    let content = req.param('message'),
    userId = req.param('user_id'); //original user_id from mongodb user model

    if (!content) return res.badRequest({ err: 'Invalid post content field' });
    if (!userId) return res.badRequest({ err: 'Invalid user_id field' });

    Post.create({
       message : content,
       user : userId
      })
      .then(_post => {
      //  if(!_post) return res.serverError({err:'Unable to create post'});

         return res.ok(_post); //to learn more about responses check api/responses folder
      })
      .catch(err => res.serverError(err.message));
    },


    findAll: function (req, res) {

    Post.find()
      .populate('user')
      .populate('comments')
      .then(_posts => {

        return res.ok(_posts);

      })
      .catch(err => res.serverError(err));
  },
  }
