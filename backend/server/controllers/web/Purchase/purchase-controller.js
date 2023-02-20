const express = require('express');
const app = express();
const { success, error, validation } = require("../../../helpers/apiResponse");
const { CleanData } = require("../../../helpers/cleanEmptyData");
const Purchase = require('../../../models/purchase/purchase');


const AddPurchase = async function (req, res){    
    try {
        console.log("this is creeeateee purchase")
        console.log(req.body)

        const {product_name,purchase_amount,supplier,purchase_status,reference_number,purchase_date,product_color,product_category,product_quantity,product_unit} = req.body
            const purchaseList = await Purchase.find();
            console.log(purchaseList.length)
            if (purchaseList.length ==0 ){
                purchase_collection_index = 0;
                console.log(purchase_collection_index)
            }else{
                Robject =purchaseList.slice(-1).pop()
                purchase_collection_index  =Robject.purchase_collection_index ;
            }
            console.log(purchase_collection_index)
            var purchase_id = 'un-cable-'+(Number(purchase_collection_index)+1);
                console.log(purchase_id)
                purchase_collection_index = (Number(purchase_collection_index)+1)
                console.log(purchase_collection_index)
            
            
            var purchaseData = await Purchase.create({
                purchase_id,
                purchase_collection_index,
                product_name,
                purchase_amount,
                supplier,
                purchase_status,
                reference_number,
                purchase_date,
                product_color,
                product_category,
                product_quantity,
                product_unit
            });

            res.status(200).json(success("Success",
                                    purchaseData,
                                    res.statusCode));
    } catch (error) { 
        res.send(error)   
    }
}

// Get purchase

const getPurchase = async function (req, res){    
    try {
        const purchaseList = await Purchase.find();
        res.send (purchaseList)
    } catch (error) { 
        res.send(error)   
    }
}

module.exports = {
    AddPurchase,
    getPurchase
}