import React,{useState} from "react";
import { Link } from 'react-router-dom';
function Sidebar (){
    const [isActive, setIsActive] = useState(false);
    const [isPurchase, setIsPurchase] = useState(false);
    const [isSale, setIsSale] = useState(false);
    const [isProduct, setIsProduct] = useState(false);
    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
      };
      const handlePurchaseClick = event => {
        // 👇️ toggle isActive state on click
        setIsPurchase(current => !current);
      };
      const handleSaleClick = event => {
        // 👇️ toggle isActive state on click
        setIsSale(current => !current);
      };
      const handleProductClick = event => {
        // 👇️ toggle isActive state on click
        setIsProduct(current => !current);
      };
      
    let onclickclass = isActive ? ' active' :null;
    let onpurchaseclass = isPurchase ? ' active' :null;
    let onsaleclass = isSale ? ' active' :null;
    let onproductclass = isProduct ? ' active' :null;
       return (
        <div class="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                <div class="sidebar-brand">
                    <a href="index.html"> <img alt="image" src="assets/img/logo.png" class="header-logo" /> <span
                        class="logo-name">Factory</span>
                    </a>
                </div>
                <ul class="sidebar-menu">
                    <li class="menu-header">Main</li>
                    <li class="dropdown">
                    <Link to="/dashboard" onClick={() => {window.location.href="/dashboard"}} class="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></Link>
                    </li>
                    <li className={`dropdown${onclickclass}`}>
                    <a href="#" class="menu-toggle nav-link has-dropdown" onClick={handleClick}><i data-feather="command"></i><span>Admin</span></a>
                    <ul class="dropdown-menu">
                        <li><Link class="nav-link" to="/adduser">Add Users</Link></li>
                        <li><Link class="nav-link" to="/userlist">User List</Link></li>
                    </ul>
                    </li>
                    <li className={`dropdown${onproductclass}`}>
                    <a href="#" class="menu-toggle nav-link has-dropdown" onClick={handleProductClick}><i data-feather="command"></i><span>Products</span></a>
                    <ul class="dropdown-menu">
                        <li><Link class="nav-link" to="/addproduct">Add products</Link></li>
                        <li><Link class="nav-link" to="/addcolor">Add Color</Link></li>
                        <li><Link class="nav-link" to="/addcategroy">Add Categroy</Link></li>
                        <li><Link class="nav-link" to="/addsupplier">Add Supplier</Link></li>
                    </ul>
                    </li>
                    <li className={`dropdown${onpurchaseclass}`}>
                    <a href="#" class="menu-toggle nav-link has-dropdown" onClick={handlePurchaseClick}><i data-feather="command"></i><span>Purchase</span></a>
                    <ul class="dropdown-menu">
                        <li><Link class="nav-link" to="/addpurchase">Add Purchase</Link></li>
                        <li><Link class="nav-link" to="/purchaselist">All Purchase</Link></li>
                    </ul>
                    </li>
                    <li className={`dropdown${onsaleclass}`}>
                    <a href="#" class="menu-toggle nav-link has-dropdown" onClick={handleSaleClick}><i data-feather="command"></i><span>Sale</span></a>
                    <ul class="dropdown-menu">
                        <li><Link class="nav-link" to="/addsale">Add Sale</Link></li>
                        <li><Link class="nav-link" to="/">All Sale</Link></li>
                    </ul>
                    </li>
                    
                </ul>
                </aside>
            </div>
       );
    }

export default Sidebar;