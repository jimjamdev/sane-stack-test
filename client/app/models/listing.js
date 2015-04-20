import DS from 'ember-data';

export default DS.Model.extend({
  // relationships
  user: DS.belongsTo('user'),
  name: DS.attr('string'),
  body: DS.attr('string'),
  price: DS.attr('number')
});
