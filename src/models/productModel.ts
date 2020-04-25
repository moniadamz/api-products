import * as mongoose from 'mongoose'

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
export default mongoose.model('Product', ProductSchema)