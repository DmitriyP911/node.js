const { Router } = require( 'express' );

const contactsController = require( '../controllers/contactsController' );

const { makeCall } = require( '../helpers/helpers' );

const contactsRouter = Router();

contactsRouter.get( '/get', ( res, req ) => makeCall( res, req, contactsController.listContacts ) );
contactsRouter.get( '/get/:id', ( res, req ) => makeCall( res, req, contactsController.getById ) );
contactsRouter.post( '/create', ( res, req ) => makeCall( res, req, contactsController.addContact ) );
contactsRouter.patch( '/update/:id', ( res, req ) => makeCall( res, req, contactsController.updateContact ) );
contactsRouter.delete( '/delete/:id', ( res, req ) => makeCall( res, req, contactsController.delete ) );


module.exports = contactsRouter;
