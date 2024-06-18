import { Schema, model } from "mongoose";

const ProductSchema = Schema({
title:          {type: String, required: true},
description:    {type: String, required: true},
code:           {type: String, required: true},
price:          {type: Number, required: true},
status:         {type: Boolean, required: true},
stock:          {type: Number, required: true},
category:       {type: String, required: true},
thumbnails:     [String]
})

export const ProductModel= model('products', ProductSchema)