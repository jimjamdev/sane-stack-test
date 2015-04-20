import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  body: DS.attr('string'),
  price: DS.attr('number'),
  user: DS.attr('string')
});
