import ErrorResponse from'../utils/errorResponse.js';
import jwt from'jsonwebtoken';
import User from "../models/userModel.js";

// check is user is authenticated
export const isAuthenticated = async (req, res, next) => {
    const token = req.headers.authorization;
    // Make sure token exists
    if (!token) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

    try {
        console.log(token)
        // Verify token
        const decoded = jwt.verify(token, "mYsEcReTkEy");
        req.user = await User.findById(decoded.id);
        next();

    } catch (error) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }
}

//middleware for admin
export const isAdmin = (req, res, next) => {
    if (req.user.role === 0) {
        return next(new ErrorResponse('Access denied, you must an admin', 401));
    }
    next();
}