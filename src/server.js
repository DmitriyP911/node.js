const express = require( "express" );
const morgan = require( "morgan" );
const cors = require( "cors" );
const dotenv = require( "dotenv" );
const bodyParser = require( "body-parser" );
const contactsRouter = require( "./routes/contactsRouter" );
const connectMongoDB = require( "./db/connectionMongo" );

dotenv.config( { path: __dirname + "/../.env" } );

const server = async ( port, callback ) => {

    try {
        const app = express();

        const schemas = await connectMongoDB();

        app.use( cors() );

        app.use( morgan( "combined" ) );

        app.use( bodyParser.json() );

        app.use( ( req, res, next ) => {
            req.mongoDb = schemas;
            next();
        } );

        app.use( "/api", contactsRouter );

        app.listen( port, callback );
    } catch( e ) {
        console.log( e );
    }
};

module.exports = server;