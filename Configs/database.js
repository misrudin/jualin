const { databaseHost, databaseName, databasePassword, databaseUser } = require("./environment");

const connection = mysql.createConnection({
  host: databaseHost,
  user: databaseUser,
  password: databasePassword,
  database: databaseName,
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Connected to the database!');
});

module.exports = connection