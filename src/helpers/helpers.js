const makeCall = async ( req, res, fn ) => {
    try {
        const data = req.body || req.query;
        data.params = req.params;

        const result = await fn( data );

        res.send( result )
    } catch( err ) {
        console.log( err );

        const {
            status = 500,
            message = 'Bad request'
        } = err;

        res.status( status );
        res.send( message );
    }
}

const throwAnswer = ( status, message ) => {
    throw ( { status, message } )
}

const isEqual = ( a, b ) => a === b;

module.exports = {
    makeCall,
    isEqual,
    throwAnswer
};