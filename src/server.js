const express = require( "express" );
const morgan = require( "morgan" );
const cors = require( "cors" );
const dotenv = require( "dotenv" );
const bodyParser = require( "body-parser" );
const connectMongoDB = require( "./db/connectionMongo" );

dotenv.config( { path: __dirname + "/../.env" } );

const contactsRouter = require( './routes/contactsRouter' );
const authRouter = require( './routes/authRoter' );
const userRouter = require( './routes/userRouter' );

const server = async ( port, callback ) => {
    try {
        const mongoDb = await connectMongoDB();

        const app = express();

        app.use( bodyParser.json() );

        app.use( express.json() );
        app.use( cors() );
        app.use( morgan( "combined" ) );

        app.use( ( req, res, next ) => {
            req.mongoDb = mongoDb;
            next();
        } );

        app.use( "/contacts", contactsRouter );
        app.use( "/auth", authRouter );
        app.use( "/users", userRouter );

        app.use( ( req, res, next ) => {
            res.status( 404 ).send( { data: { message: "Not Found" } } );
        } );

        app.listen( port, callback );
    } catch( error ) {
        console.log( error );
    }
};

module.exports = server;