const server = require( './server.js' );

server( process.env.PORT, err => {
    if( err ) {
        console.log( 'Error on listen :', err );
        process.exit( 0 );
    }
    console.log( `App configured on port ${process.env.PORT}` );
} );