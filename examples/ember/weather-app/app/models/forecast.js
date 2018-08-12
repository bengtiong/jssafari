import DS from 'ember-data';

export default DS.Model.extend({
    dayofweek: DS.attr(),
    weather: DS.attr(),
    temp: DS.attr(),
    precipitation: DS.attr(),
    humidity: DS.attr(),
    wind: DS.attr()
});
