/**
 * Created by david on 4/10/16.
 */
var mongoose = require('mongoose'),
    env = require('./config/env.js');

if (!env.mongoDatabase) {
    console.log('Failed to connect to mongodb')
}


mongoose.connect('mongodb://mongo/' + env.mongoDatabase);

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('saved cat!');
    }
});

module.exports = mongoose;