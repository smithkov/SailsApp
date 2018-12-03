/**
 * Comments.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "comment",

    attributes: {
      message:{
        type:'string',
        required: true,
        columnName: 'comment'
      },
      user: {
          model: 'user'
      },
      post: {
        model: 'post'
      },
      time: {
        type: 'string',
        autoCreatedAt: true
      }
    },
};
