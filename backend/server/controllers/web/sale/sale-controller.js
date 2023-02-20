const express = require('express');
const app = express();
const { success, error, validation } = require("../../../helpers/apiResponse");
const { CleanData } = require("../../../helpers/cleanEmptyData");

const getSale = async function (req, res){    
    try {
        res.send("this is Sale route")
    } catch (error) { 
        res.send(error)   
    }
}


module.exports = {
    getSale
}