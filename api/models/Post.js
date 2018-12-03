/**
 * Post.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "post",
   attributes: {
       message:{
         type:'string',
         required: true,
         columnName: 'post'
       },
       user: {
         model: 'user'
       },
       comments: {
           collection: 'comments',
           via: 'post'
       },
       time: {
         type: 'string',
         autoCreatedAt: true
       }
   },

};
