const { Pool } = require('pg');

//Connect to database
const connectionString = process.env.DATABASEURL || 'postgresql://postgres:1234@localhost:5432/expense-manager',
  pool = new Pool({ connectionString });

module.exports = pool;