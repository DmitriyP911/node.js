const multer = require( "multer" );

const makeCall = async ( req, res, func ) => {
    try {
        const data = req.method === "GET" ? req.query : req.body;
        data.params = req.params;

        const result = await func( data, { mongoDb: req.mongoDb } );
        const { status, ...request } = result;
        res.status( status ).send( request );
    } catch( err ) {
        console.log( err );
        const { status = 500, message = "Bad request" } = err;
        res.status( status );
        res.send( message );
    }
};

const throwAnswer = ( status, message ) => {
    throw ( { status, message } )
};

const storage = multer.diskStorage( {
    destination: ( req, res, cb ) => {
        cb( null, `${__dirname}./../../../public/images/` );
    },
    filename: ( req, file, cb ) => {
        cb( null, file.originalname );
    },
} );

const upload = multer( { storage } );

const isEqual = ( a, b ) => a === b;

module.exports = {
    makeCall,
    isEqual,
    throwAnswer,
    upload
};