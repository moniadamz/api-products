import * as mongoose from 'mongoose'
const mongoosePaginate = require('mongoose-paginate-v2')

const Schema = mongoose.Schema

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
})
ProductSchema.plugin(mongoosePaginate)

export default mongoose.model('Product', ProductSchema)