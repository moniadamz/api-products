"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const jwt = require("jsonwebtoken");
class Authentication {
    constructor() { }
    authenticate(req, res, next) {
        try {
            const token = req.headers.authentication;
            if (!token || token == undefined) {
                return res.status(401).send({ message: "Unauthorized." });
            }
            jwt.verify(token.toString(), process.env.SECRET);
            next();
        }
        catch (error) {
            console.log('error', error);
            res.status(401).send({ message: "Unauthorized." });
        }
    }
}
exports.default = new Authentication();
//# sourceMappingURL=auth.js.map