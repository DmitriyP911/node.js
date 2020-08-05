const { Router } = require( 'express' );

const controller = require( '../controllers/controller' );

const { makeCall } = require( '../helpers/heplers' );

const userRouter = Router();

userRouter.get( '/get', ( res, req ) => makeCall( res, req, controller.listContacts ) );
userRouter.get( '/get/:id', ( res, req ) => makeCall( res, req, controller.getById ) );
userRouter.post( '/create', ( res, req ) => makeCall( res, req, controller.addContact ) );
userRouter.patch( '/update/:id', ( res, req ) => makeCall( res, req, controller.updateContact ) );
userRouter.delete( '/delete/:id', ( res, req ) => makeCall( res, req, controller.delete ) );


module.exports = userRouter;
