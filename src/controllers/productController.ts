import * as mongoose from 'mongoose';
import { ProductSchema } from '../models/productModel';
import { Request, Response } from 'express';

const Product = mongoose.model('Product', ProductSchema);

export class ProductController{

    constructor() {}

    public addNewProduct(req: Request, res: Response) {                
        let newProduct = new Product(req.body);
    
        newProduct.save((err, product) => {
            if(err){
                res.send(err);
            }    
            res.json(product);
        });
    }

    public getProducts(req: Request, res: Response) {
        Product.find({}, (err, product) => {
            if(err) {
                res.send(err)
            }
            res.json(product)
        })
    }

    public getProductById(req: Request, res: Response) {
        Product.findById(req.params.productId, (err, product) => {
            if(err) {
                res.send(err)
            }
            res.json(product)
        })
    }

    public updateProduct(req: Request, res: Response) {
        Product.findOneAndUpdate({ _id: req.params.productId}, req.body, { new: true }, (err, product) => {
            if(err) {
                res.send(err)
            }
            res.json(product)
        })
    }
}