//previous code
// const Knex = require("knex");
// const options = {
//     client: 'mysql',
//     connection: {
//         host: '127.0.0.1',
//         user: 'root',
//         password: '',
//         database: 'clothingShopApi'
//     }
// }
// const knex = Knex(options);

// module.exports = knex;

const path = require('path');
module.exports = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clothingShopApi'
  },
  migrations: {
    tableName: 'migrations',
    directory: path.resolve(__dirname, './migrations'),
  },
  useNullAsDefault: false
};