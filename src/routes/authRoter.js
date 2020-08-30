const { Router } = require( "express" );
const { makeCall } = require( "../helpers/helpers" );

const auth = require( "../controllers/authController" );
const { jwtMiddleware } = require( "../middleware/jwt" );

const authRouter = Router();

authRouter.post( "/register", ( req, res ) => makeCall( req, res, auth.register ) );
authRouter.post( "/login", ( req, res ) => makeCall( req, res, auth.logIn ) );
authRouter.post( "/logout/:authorization", jwtMiddleware, ( req, res ) => makeCall( req, res, auth.logOut ) );
authRouter.get( "/verify/:verificationToken", ( req, res ) => makeCall( req, res, auth.verify ) );

module.exports = authRouter;