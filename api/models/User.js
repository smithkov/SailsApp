/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "user",

    attributes: {
        username:{
           type: 'string',
           required: true
        },
        posts: {
            collection: 'post',
            via: 'user'
        },
    },

};
