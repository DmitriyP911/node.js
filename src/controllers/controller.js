const { isEqual, throwAnswer } = require( '../helpers/heplers' );
const path = require( "path" );
const fs = require( "fs" ).promises;

const contactsPath = path.join( __dirname, "../db/contacts.json" );

const getContacts = async () => {
    const result = await fs.readFile( contactsPath, "utf-8" );
    return JSON.parse( result );
};

const setContacts = async ( data ) => {
    await fs.writeFile( contactsPath, JSON.stringify( data ), "utf-8" );
};

const user = {
    getById: async ( data ) => {
        const { id } = data.params;

        const users = await getContacts();

        const user = users.find( user => isEqual( user.id, parseInt( id ) ) );

        if( !user ) {
            throwAnswer( 404, 'User not found' );
        }

        return user
    },
    listContacts: async () => {
        return await getContacts();
    },
    addContact: async (
        { id,
            name,
            email,
            phone
        }
    ) => {
        const users = await getContacts();

        users.push( { id: users.length + 1, name, email, phone } );
        if( name === undefined || email === undefined || phone === undefined ) {
            throwAnswer( 400, 'Missing required fields' )
        }

        setContacts( users );

        return throwAnswer( 201, { id: users.length, name, email, phone } )
    },
    updateContact: async ( data ) => {
        const id = parseInt( data.params.id );
        const { name, email, phone } = data;

        if( name === undefined || email === undefined || phone === undefined ) {
            throwAnswer( 400, "Missing fields" );
        }
        const users = await getContacts();

        const userId = users.findIndex( user => isEqual( user.id, id ) );

        if( !users[userId] ) {
            throwAnswer( 404, "Not found" );
        }
        users[userId] = {
            id,
            name,
            email,
            phone
        };

        setContacts( users );

        return throwAnswer( 200, users[userId] );
    },
    delete: async ( data ) => {
        const id = parseInt( data.params.id );

        const users = await getContacts();

        const userId = users.findIndex( ( user ) => isEqual( user.id, id ) );

        if( !users[userId] ) throwAnswer( 404, "Not found" );

        users.splice( userId, 1 );

        setContacts( users );

        return throwAnswer( 200, 'Contact deleted' );
    }
}

module.exports = user
