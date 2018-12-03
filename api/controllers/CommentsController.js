/**
 * CommentsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  create: function (req, res) {

    let content = req.param('message'),
    postId = req.param('post_id'),
    userId = req.param('user_id'); //original user_id from mongodb user model

    if (!content) return res.badRequest({ err: 'Invalid post content field' });
    if (!userId) return res.badRequest({ err: 'Invalid user_id field' });
    if (!postId) return res.badRequest({ err: 'Invalid post_id field' });

    Comments.create({
       message : content,
       user : userId,
       post: postId
      })
      .then(_comment => {
      //  if(!_post) return res.serverError({err:'Unable to create post'});

         return res.ok(_comment); //to learn more about responses check api/responses folder
      })
      .catch(err => res.serverError(err.message));
    },
    findAll: function (req, res) {

    Comments.find()
      .populate('user')
      .populate('post')
      .then(_comments => {

        return res.ok(_comments);

      })
      .catch(err => res.serverError(err));
  },
}
