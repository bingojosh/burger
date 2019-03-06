const orm = require('../config/orm');

module.exports = {
    selectAllDaBurgers: function(cb) {
        orm.selectAll('burgers', function(result) {
            cb(result);
        });
    },

    addDaBurger: function(value, cb) {
        console.log(value)
        orm.insertOne('burgers ', '(burger_name)', value, function(result) {
            cb(result);
        });
    },

    eatDaBurger: function(id, cb) {
        orm.updateOne({devoured: 1}, id, function(result) {
            cb(result);
        })
    }
}