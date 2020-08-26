const makeCall = async ( req, res, func ) => {
    try {
        const data = req.method === "GET" ? req.query : req.body;
        data.params = req.params;

        const result = await func( data, { mongoDb: req.mongoDb } );
        const { status, payload } = result;

        res.status( status ).send( payload );
    } catch( err ) {
        console.log( err );
        const { status, message } = err;
        res.status( status ).send( message );
    }
};

const throwAnswer = ( status, message ) => {
    throw ( { status, message } )
}

const isEqual = ( a, b ) => a === b;

module.exports = {
    makeCall,
    isEqual,
    throwAnswer
};