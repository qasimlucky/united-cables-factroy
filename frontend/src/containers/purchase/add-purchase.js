import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DatePicker from 'react-date-picker';
import Swal from 'sweetalert2';
import { BsXLg } from "react-icons/bs";
import { Alert } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CMultiSelect } from '@coreui/react-pro'


function AddPurchase(props) {

    const [supplierdata, setSupplierData] = useState([{}])
    const [categroydata, setCategroyData] = useState([{}])
    const [colordata, setColorData] = useState([{}])
    const [selectedproduct,setSelectedProduct] = useState([]);
    const [value, onChange] = useState(new Date());
    const [refnumber,setBillReferenceNumber] = useState();
    const [stockdata, setStockData] = useState([{}])
    const [searchvalue, setSerachValue] = useState("");
    const [supplier,setSupplierName] = useState();
    const [purchasestatus,setPurchaseStatus] = useState();
    const [totalpurchaseamount,setTotalPurchaseAmount] = useState();
    const [itemcolor,setItemColor] = useState();
    const [itemcategroy,setItemCategroy] = useState();
    const [itemquantity,setItemQuantity] = useState();
    const [itempurchaseamount,setItemPurchaseAmount] = useState();
    const [itemunit,setItemUnit] = useState();
    const [itemname,setItemName] = useState();

   function handleSupplier(e){
    setSupplierName(e.target.value)
  }
  function handlePurchaseStatus(e){
    setPurchaseStatus(e.target.value)
  }
   function handleReferenceNumber(e){
    console.log(e.target.value)
    setBillReferenceNumber(e.target.value)
  }
  function handleCategroy(e){
    console.log(e.target.value)
    setItemCategroy(e.target.value)
  }
  function handleColor(e){
    console.log(e.target.value)
    setItemColor(e.target.value)
  }
  function QuantityChange(e){
    console.log(e.target.value)
    setItemQuantity(e.target.value)
  }
  function PurchasePriceChange(e,product){
    console.log(e.target.value)
    setItemUnit(product.product_unit)
    setItemName(product.product_title)
    setItemPurchaseAmount(e.target.value)
  }
  
    
    useEffect(() => {
        axios.get("http://localhost:7000/product/supplier").then(Response =>{
          console.log(Response.data)
          setSupplierData(Response.data)
        }).catch(err =>{
          console.log(err)
        })
    },[]);


    useEffect(() => {
        axios.get("http://localhost:7000/product/get").then(Response =>{
          console.log(Response.data)
          setStockData(Response.data)
        }).catch(err =>{
          console.log(err)
        })
    },[]);

    useEffect(() => {
        axios.get("http://localhost:7000/product/categroy/get").then(Response =>{
          console.log(Response.data)
          setCategroyData(Response.data)
        }).catch(err =>{
          console.log(err)
        })
    },[]);

    useEffect(() => {
        axios.get("http://localhost:7000/product/color/get").then(Response =>{
          console.log(Response.data)
          setColorData(Response.data)
        }).catch(err =>{
          console.log(err)
        })
    },[]);

    useEffect(() => {
      getUsers()
    }, [getUsers])
    
    function getUsers(data){
      console.log(data)
    }

    const onChangeValue = (event) => {
        setSerachValue(event.target.value);
      };

    async function onSearchClick(searchTerm) {
        
      console.log("search ", searchTerm);
      console.log("addsearch ", selectedproduct);
       // var  objIndex = selectedproduct.findIndex((obj => obj.product_id == searchTerm.product_id));
        //console.log(partnerDetails)
        if(selectedproduct.length==1){ 
          console.log('already exist')
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `please add this purchase first`,
          })
        }else{
          selectedproduct.push(searchTerm)
          setSelectedProduct([...selectedproduct])
        }
      }; 
    
      function RemoveFromSelected(product){
        setSelectedProduct(selectedproduct.filter(emp => emp.product_id !== product.product_id))
      }

      async function PurchaseAdd(){
        try{
            var PurchaseObject = {
                product_name :itemname,
                purchase_amount: itempurchaseamount, 
                supplier:supplier,
                purchase_status:purchasestatus,
                reference_number:refnumber,
                purchase_date:value,
                product_color:itemcolor,
                product_category:itemcategroy,
                product_quantity:itemquantity,
                product_unit:itemunit,
                
            }
            console.log(PurchaseObject)
            /* savebill.push(billObject)
            console.log("this is save bill")
            console.log(savebill) */    
             axios
             .post("http://localhost:7000/purchase/add", PurchaseObject)
            .then(res => {
              console.log(res.data)
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Purchase has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            }).catch(err =>{
                console.log(err)
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    text: 'Something went wrong!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }) 
        }catch{
            console.log("something went wrong")
        }
      
        }

  return (
    <>
      <Navbar />
      <Sidebar />

      <div id="app" style={{ marginTop: "110px" }}>
        <section class="section">
          <div class="container" style={{maxWidth:"1300px", paddingLeft:"0px"}}>
            <div class="row">
              <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-11 offset-xl-2">
                <div class="card card-primary">
                  <div class="card-header">
                    <h4>Add Purchase</h4>
                  </div>
                  <div class="card-body">
                    <div class="row">
                        <div class="form-group col-3">
                            <label for="">Supplier</label>
                            <div>
                                <input  onChange={(e) => handleSupplier(e)}  list="supplier" name="supplier" id="categories" placeholder="All supplier" style={{height:"40px" ,width:"100%", lineHeight:"initial"}}/>
                                    <datalist  id="supplier">
                                        <option>supplier</option>
                                        {supplierdata && supplierdata.map(Details => (
                                        <option>{Details.first_name}</option>
                                        ))} 
                                    </datalist>
                            </div>
                        </div>
                        <div class="form-group col-3">
                            <label for="">Purchase Status </label>
                            <div>
                                <input  onChange={(e) => handlePurchaseStatus(e)}  list="purchase_status" name="purchase_status" id="categories" placeholder="select status" style={{height:"40px" ,width:"100%", lineHeight:"initial"}}/>
                                    <datalist  id="purchase_status">
                                        <option>ordered</option>
                                        <option>pending</option>
                                        <option>recivied</option>
                                    </datalist>
                            </div>
                        </div>
                        <div class="form-group col-3">
                          <label for="">Purchase Date</label>
                          <DatePicker onChange={onChange} value={value} style={{height:"40px",width:"100%"}} />
                        </div>
                        <div class="form-group col-3">
                          <label for="">Reference Number</label>
                          <input onChange={(e) => handleReferenceNumber(e)} id="reference_number" type="text" class="form-control"  name="reference_number" placeholder="e.g 0321-7171898" style={{border:"1px solid black", height:"40px"}}  />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-3">
                          <label for="">Select Product</label>
                          <div className="App">
                            <div className="search-container">
                              <div className="search-inner">
                                <input type="text" value={searchvalue} onChange={onChangeValue} style={{height:"40px", lineHeight:"initial" , width:"100%"}}/>
                                {/* <button onClick={() => onSearch(searchvalue)} style={{height:"40px" ,width:"25%", lineHeight:"initial", marginLeft:"2px"}}> Search </button> */}
                              </div>
                              <div className="dropdown">
                                {stockdata &&  stockdata
                                  .filter((item) => {
                                      if(searchvalue){
                                          const searchTerm = searchvalue.toLowerCase();
                                          const fullName = item.product_title.toLowerCase();
                                          return (
                                              searchTerm &&
                                              fullName.startsWith(searchTerm) &&
                                              fullName !== searchTerm
                                            );
                                      }

                                  })
                                  .slice(0, 10) 
                                  .map((newitem) => (
                                    <div
                                    onClick={() => onSearchClick(newitem)}
                                      className="dropdown-row"
                                      /* key={item.product_title} */
                                    >
                                      {newitem.product_title}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>{/* 
                        <div class="form-group col-2">
                            <label>If new product</label>
                            <Link to="/addstock" className="btn btn-success ">
                                Add Product
                            </Link>
                        </div> */}
                    </div>
                    <div style={{border:"1px solid black"}}></div>
                      <div style={{marginTop:'20px',display:"flex", flexWrap:"nowrap",width:"100%", height:"60px"}}>
                        <div  style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"7%"}}>Sr#
                        </div>
                        <div style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"21%"}}  >
                            Product Name
                        </div>
                        <div style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"13%"}} >
                          Quantity
                        </div>
                        <div style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"13%"}}>
                            Purchase Price
                        </div>
                        <div style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"13%"}}>
                            Categroy
                        </div>
                        <div style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"13%"}}>
                            Color
                        </div>
                        <div style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"13%"}}>
                            Unit
                        </div>
                        <div  style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"7%"}}>
                          Action
                        </div>
                      </div>
                      <div className="puschase-stock-list" style={{marginTop:'20px',width:"100%", height:"220px", overflow:"scroll"}}>
                      {selectedproduct && selectedproduct.map(product => ( 
                      <div style={{display:"flex", flexWrap:"nowrap",width:"100%", height:"60px"}}>
                        <div  style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"7%"}}>Sr#
                        </div>
                        <div style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"21%"}}  >
                            {product.product_title}
                        </div>
                        <div style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"13%"}} >
                          <input style={{height:"35px"}} onChange = {(e) =>QuantityChange(e,product )}  type="text" class="form-control"   placeholder="e.g 500"  />
                        </div>
                        <div style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"13%"}}>
                          <input style={{height:"35px"}}  onChange = {(e) =>PurchasePriceChange(e,product )}   type="text" class="form-control"  placeholder="e.g 700"  />
                        </div>
                        <div style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"13%"}}>
                            <div>
                                <input  onChange={(e) => handleCategroy(e)}  list="categroy" name="categroy" id="categories" placeholder="All Categroy" style={{height:"40px" ,width:"100%", lineHeight:"initial"}}/>
                                    <datalist  id="categroy">
                                        {categroydata && categroydata.map(Details => (
                                        <option>{Details.category_title}</option>
                                        ))} 
                                    </datalist>
                            </div>
                        </div>
                        <div style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"13%"}}>
                          <div>
                              <input  onChange={(e) => handleColor(e)}  list="color" name="color" id="categories" placeholder="All Colors" style={{height:"40px" ,width:"100%", lineHeight:"initial"}}/>
                                  <datalist  id="color">
                                      {colordata && colordata.map(Details => (
                                      <option>{Details.color_title}</option>
                                      ))} 
                                  </datalist>
                          </div>
                        </div>
                        <div style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"13%"}}>
                            {product.product_unit}
                        </div>
                        <div  style={{border:"1px solid red", display: "flex",justifyContent: "center", alignItems:"center", padding:"10px", width:"7%"}}>
                          <BsXLg style={{color:"#DB1414"}}  onClick={()=>RemoveFromSelected(product)} />
                        </div>
                      </div> 
                      ))}
                      </div>
                      <div class="row">
                      <div class="form-group col-4" style={{display:"flex",marginTop:"15px"}}>
                        {/* <div>Number Items:</div>
                        <div style={{marginLeft:"10px"}}>{numberofitem} </div> */}
                      </div>  
                      <div class="form-group col-2" style={{display:"flex",marginTop:"15px"}}>
                        <div >Net Total Amount:</div>
                        <div style={{marginLeft:"10px"}}>{/* {totalpurchaseamount} */}</div>
                      </div>
                      <div class="form-group col-2" ></div>
                        <div class="form-group col-4">
                          <button  onClick = {() =>PurchaseAdd()}  class="btn btn-success btn-lg btn-block" style={{marginTop:"15px",color:'white'}}>
                            Add Purchase
                          </button>
                        </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


export default AddPurchase;