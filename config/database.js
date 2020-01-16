const { createPool } = require("mysql");

const pool = createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'nodeapijwt',
  connectionLimit: 10
});

module.exports = pool;
