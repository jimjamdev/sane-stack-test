/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    // Relationships
    listings: {
      collection: 'listing',
      via: 'user'
    },

    name : { type: 'string' },

    age : { type: 'float' },

    email : { type: 'string' }
  }
};

