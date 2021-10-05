require( "dotenv" ).config()
const mysql = require( "mysql" );

const connection = mysql.createConnection( {
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB
} );

connection.connect( err => {
    if ( err ) console.error( 'connection échoué : ', err.message );
    else console.log( 'connection réussie !!!' );
} );

module.exports = connection;