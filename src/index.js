const express = require( 'express' );
const morgan = require( 'morgan' );
const cors = require( 'cors' );
const dotenv = require( 'dotenv' );
const bodyParser = require( 'body-parser' );
const userRouter = require('./routers/userRouter')

dotenv.config();

const app = express();

app.use( bodyParser.json() );

app.use( '/users', userRouter );

app.use( ( req, resp, next ) => {
    resp.status(404).send({message: 'Not found'})
})

module.exports = app;