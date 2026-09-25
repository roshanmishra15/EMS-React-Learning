const jwt = require("jsonwebtoken")
const authmiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                status: false,
                message: "Token required"
            })
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                status: false,
                message: "Invalid Auth Format"
            })
        }
        const decode = jwt.verify(token, process.env.SECRET_KEY);
        if (!decode) {
            return res.status(401).json({
                status: false,
                message: "Invalid Token"
            })
        }
        req.user = decode;
        next();
    }
    catch (error) {

        return res.status(401).json({
            status: false,
            message: "Invalid or expired token"
        });

    }
}
module.exports = authmiddleware;