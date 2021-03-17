const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "raphael322",
    port: 5432,
    database: "coursedb"
  });
  
  module.exports = pool;