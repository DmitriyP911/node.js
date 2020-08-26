const mongoose = require( "mongoose" );
const contactModel = require( "./models/index" );

const connectMongoDB = async () => {
    try {
        const { MONGO_DB_URL } = process.env;
        const connection = await mongoose.connect( MONGO_DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        } );

        if( connection ) {
            console.log( `Database connection successful` )
        } else console.log( `Database connection failed` )

        return contactModel;
    } catch( e ) {
        console.log( e );
        process.exit( 1 );
    }
};

module.exports = connectMongoDB;