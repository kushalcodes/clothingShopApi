
exports.up = function(knex, Promise) {
  
    return knex
    .schema
    .hasTable('users')
    .then(function (exists) {
        if (!exists) {
            return knex // **** udpate
                .schema
                .createTable('users', function (table) {
                    table.increments('id').primary()
                    table.string('userFname')
                    table.string('userLname')
                    table.string('username')
                    table.string('password')
                })
                .then(console.log("Table users created."));
        }else{
            console.log("Table users already created!");
        }
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
