require('dotenv').config()
import * as jwt from "jsonwebtoken";
class Authentication {
  constructor() {}

  public authenticate(req, res, next) {
    try {
      const token = req.headers.authentication;
      if (!token || token == undefined){
        console.log('alo')
        return res.status(401).send({ message: "Unauthorized." });
      }
      jwt.verify(token.toString(), process.env.SECRET );
      next();
    } catch (error) {
      console.log('error', error)
      res.status(401).send({ message: "Unauthorized." });
    }
  }
}

export default new Authentication();
