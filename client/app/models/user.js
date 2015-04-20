import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),
  email: DS.attr('email'),
  listings: DS.hasMany('listing'),
});
