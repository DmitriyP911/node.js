const mongoose = require( "mongoose" );
const schemas = require( "./models" );

const connectMongoDB = async () => {
    try {
        const { MONGO_DB_URL } = process.env;
        const connection = await mongoose.connect( `mongodb+srv://dima911:mUR1gqdl6lkzs6hW@cluster0.dno42.mongodb.net/users?retryWrites=true&w=majority`, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        } );

        if( connection ) console.log( `Database connection successful` );
        else console.log( `Database connection failed` )

        return schemas;
    } catch( e ) {
        console.log( e );
        process.exit( 1 );
    }
};

module.exports = connectMongoDB;