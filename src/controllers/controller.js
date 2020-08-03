const users = require( '../db/contacts.json' );
const { isEqual } = require( '../helpers/heplers' );

const user = {
    get: (data) => { 
        const { id } = data.params;

        const user = users.find( user => isEqual(user.id, parseInt(id)) );

        if( !user ) {
            throw {status: 404, message: 'User not found'}
        }

        return user
    },
    getAll: () => { 
        throw { status: 400, message: 'bad error'};
    },
    create: () => {

     },
    update: () => { 

    },
    delete: () => {

    }
}

module.exports = user