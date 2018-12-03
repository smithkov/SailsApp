/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: function (req, res) {

      let username = req.param('username');

       if(!username){
         return res.badRequest({err:'Invalid username'});
       }


      User.create({
       username : username
      })
      .then(_user => {


         return res.ok(_user); //to learn more about responses check api/responses folder
      })
      .catch(err => res.serverError(err.message));
    },

    findAll: function (req, res) {

    User.find()
      .populate('posts')
      .then(_users => {

        return res.ok(_users);

      })
      .catch(err => res.serverError(err));
  }
  };
