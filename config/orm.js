const connection = require('./connection.js');

module.exports = {
    selectAll: function(table, cb) {
        connection.query('SELECT * FROM ' + table, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    insertOne: function(table, col, value, cb) {
        const queryString = 'INSERT INTO ' + table + col +' VALUES (?)'
        console.log(value)
        console.log(queryString)
        connection.query(queryString, value, function(err, result) {
            if (err) throw err;
            console.log(result)
            cb(result);
        });
    },

    updateOne: function(value, id, cb) {
        const queryString = 'UPDATE burgers SET ? WHERE ?';

        connection.query(queryString, [value, id], function(err, result) {
            if (err) throw err;

            cb(result);
        })
    }
}