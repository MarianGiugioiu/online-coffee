const dotenv = require('dotenv');

// get config vars
dotenv.config();

const config = {
    //database connection details
    db: {
        host: "localhost",
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: "online_coffee"
    },
    //limit for number of elements returned by queries
    listPerPage: 4,
  };

module.exports = config;