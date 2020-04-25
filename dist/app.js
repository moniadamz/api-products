"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const productRoute_1 = require("./routes/productRoute");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.routePrv = new productRoute_1.Routes();
        this.mongoUrl = 'mongodb+srv://moni:2706Moni@cluster0-uzuzx.mongodb.net/api-products?retryWrites=true&w=majority';
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map