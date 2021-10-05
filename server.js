const express = require( 'express' );
const cors = require( 'cors' );
const paths = require( './src/config/paths' );
const projetRouter = require( './src/routes/projets.routes' );
const server = express();

server.use( express() );
server.use( express.static( 'public' ) );
server.use( express.json( { limit: '50mb' } ) );
server.use( express.urlencoded( { limit: '50mb', extended: true } ) );
server.use( cors() );
server.use( paths.base_uri, projetRouter );

const port = process.env.PORT;
server.listen( port, () => {
    console.log( `le server écoute sur le port ${ port }` );
} );