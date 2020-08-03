const { Router } = require( 'express' );

const controller = require( '../controllers/controller' );

const { makeCall } = require( '../helpers/heplers' );

const userRouter = Router();

userRouter.get( '/get', (res, req) => makeCall(res, req, controller.getAll) );
userRouter.get( '/get/:id', (res, req) => makeCall(res, req, controller.get) );
userRouter.post( '/create', (res, req) =>  makeCall(res, req, controller.create) );
userRouter.patch( '/update/:id', (res, req) =>  makeCall(res, req, controller.update) );
userRouter.delete( '/delete/:id', (res, req) => makeCall(res, req, controller.delete) );



module.exports = userRouter;