var router = require('express').Router();

const { 
    getSale,
    
} = require('../../../controllers/web/sale/sale-controller');


router.get('/get',getSale);

module.exports = router;