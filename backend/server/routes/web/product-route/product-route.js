var router = require('express').Router();

const { 
    addProductTitle,
    addProductCategroy,
    addProductColor,
    addProductsupplier,
    getSuppliers,
    getProduct,
    getProductCategroy,
    getProductColor
    
} = require('../../../controllers/web/product/product-controller');


router.post('/add',addProductTitle);
router.post('/categroy',addProductCategroy);
router.post('/color',addProductColor);
router.post('/supplier',addProductsupplier);
router.get('/supplier',getSuppliers);
router.get('/get',getProduct);
router.get('/categroy/get',getProductCategroy);
router.get('/color/get',getProductColor);


module.exports = router;