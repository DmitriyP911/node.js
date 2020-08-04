const shortid = require('shortid');
const users = require('../db/contacts.json');
const {isEqual} = require('../helpers/heplers');

const user = {
    get: (data) => {
        const {id} = data.params;

        const user = users.find(user => isEqual(user.id, parseInt(id)));

        if (! user) {
            throw {
                status : 404,
                message : 'User not found'
            }
        }

        return user
    },
    getAll: () => {
        return users;
    },
    create: (data) => {
        const {id, name, email, phone} = data;

        users.push({id, name, email, phone});

        return {id, name, email, phone}
    },
    update: () => {},
    delete: () => {}
}

module.exports = user
