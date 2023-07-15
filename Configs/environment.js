require('dotenv').config();

module.exports = {
  databaseHost: process.env.DARABASE_HOST,
  databaseUser: process.env.DATABASE_USER,
  databasePassword: process.env.DATABASE_PASSWORD,
  databaseName: process.env.DATABASE_NAME
}