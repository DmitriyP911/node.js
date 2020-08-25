const { Router } = require( 'express' );

const contactsController = require( '../controllers/contactsController' );

const { makeCall } = require( '../helpers/helpers' );

const contactsRouter = Router();

contactsRouter.get( '/get', ( res, req ) => makeCall( res, req, contactsController.getAll ) );
contactsRouter.get( '/get/:id', ( res, req ) => makeCall( res, req, contactsController.get ) );
contactsRouter.post( '/create', ( res, req ) => makeCall( res, req, contactsController.create ) );
contactsRouter.patch( '/update/:id', ( res, req ) => makeCall( res, req, contactsController.update ) );
contactsRouter.delete( '/delete/:id', ( res, req ) => makeCall( res, req, contactsController.delete ) );


module.exports = contactsRouter;
