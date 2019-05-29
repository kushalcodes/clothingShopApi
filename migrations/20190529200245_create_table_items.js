
exports.up = function(knex, Promise) {
  return knex
  .schema
  .hasTable('items')
  .then(function (exists) {
      if (!exists) {
          return knex 
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
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('items');
};
