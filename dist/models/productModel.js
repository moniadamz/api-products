"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    sku: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    producedAt: {
        type: Date,
    },
    registeredAt: {
        type: Date,
        default: Date.now
    }
});
ProductSchema.plugin(mongoosePaginate);
exports.default = mongoose.model('Product', ProductSchema);
//# sourceMappingURL=productModel.js.map