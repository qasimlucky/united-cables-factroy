import { Route, Routes } from 'react-router-dom';
import Home from './containers/index'
import AddProduct from './containers/product/add-product';
import AddProducColor from './containers/product/add-product-color';
import AddProducCategroy from './containers/product/add-product-categroy';
import AddSupplier from './containers/product/add-supplier';
import AddPurchase from './containers/purchase/add-purchase';
import AddUser from './containers/users/add-user';
import UserList from './containers/users/user-list';
import EditUser from './containers/users/edit-user';
import PurchaseList from './containers/purchase/list-purchase';


function App() {
  return (
    <main>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/dashboard" exact element={<Home/>}/>
                <Route path="/addproduct" exact element={<AddProduct/>}/>
                <Route path="/addcolor" exact element={<AddProducColor/>}/>
                <Route path="/addcategroy" exact element={<AddProducCategroy/>}/>
                <Route path="/addsupplier" exact element={<AddSupplier/>}/>
                <Route path="/addpurchase" exact element={<AddPurchase/>}/>
                <Route path="/adduser" exact element={<AddUser/>}/>
                <Route path="/userlist" exact element={<UserList/>}/>
                <Route path="/edituser" exact element={<EditUser/>}/>
                <Route path="/purchaselist" exact element={<PurchaseList/>}/>
            </Routes>
            
                
        </main>
  );
}

export default App;
