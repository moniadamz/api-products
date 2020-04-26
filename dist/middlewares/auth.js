"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
class Authentication {
    constructor() { }
    authenticate(req, res, next) {
        try {
            const token = req.headers.authentication;
            if (!token || token == undefined)
                return res.status(401).send({ message: "Unauthorized." });
            jwt.verify(token.toString(), "fa93126886e3a380073b2edbc19e2544c4a");
            next();
        }
        catch (error) {
            res.status(500).send({ message: "Authorization error." });
        }
    }
}
exports.default = new Authentication();
//# sourceMappingURL=auth.js.map