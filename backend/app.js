const express = require('express')
const app = express()
const port = 7000
const path = require('path');
var bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

// db connection
const connectDB = require('./server/config/db');
connectDB();

// Routes 
const usersRoute = require('./server/routes/web/user-route/user-route')
const purchaseRoutes = require('./server/routes/web/purchase-route/purchase-route')
const saleRoutes = require('./server/routes/web/sale-route/sale-route')
const productRoutes = require('./server/routes/web/product-route/product-route')

app.use('/user', usersRoute)
app.use('/purchase', purchaseRoutes)
app.use('/sale', saleRoutes)
app.use('/product', productRoutes)


//
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})