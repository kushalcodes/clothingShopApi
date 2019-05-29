//not in use
//use migration instead
//just for backup code
const knex = require("./knexFile");
knex
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
    });

    
knex
.schema
.hasTable('items')
.then(function (exists) {
    if (!exists) {
        return knex // **** udpate
            .schema
            .createTable('items', function (table) {
                table.increments('id').primary()
                table.string('itemName')
                table.string('itemPrice')
                table.string('itemImageName')
                table.string('itemDescription')
            })
            .then(console.log("Table items created."));
    }else{
        console.log("Table items already created!");
    }
});