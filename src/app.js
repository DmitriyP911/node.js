const server = require( './index' );

server.listen( process.env.PORT, ( err ) => {
    if( err ) return console.log( err );

    console.log(`Server configured on port ${process.env.PORT} `)
})