import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function AddProduct
(props) {
  let navigate = useNavigate();
  const MySwal = withReactContent(Swal)
  const [data, setData] = useState({})

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
   console.log(data)
  }
  const url = "http://localhost:7000/product/add"
  function submit(e) {
    console.log(data)
    e.preventDefault();
    axios
      .post(url, data)
      .then(res => {
        console.log(res.data)
        Swal.fire({
          icon: 'success',
          title: 'Congratulations',
          text: 'New Product  Add!!!!',
          showConfirmButton: false,
          timer: 1500
        })
        navigate("/dashboard")
      }).catch(err =>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          showConfirmButton: false,
          timer: 1500
        })
          console.log(err)
          navigate("/dashboard")
        })

  }

  return (
    <>
      <Navbar />
      <Sidebar />

      <div id="app" style={{ marginTop: 150 }}>
        <section class="section">
          <div class="container mt-10">
            <div class="row">
              <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-11 offset-xl-2">
                <div class="card card-primary">
                  <div class="card-header">
                    <h4>Add Product</h4>
                  </div>
                  <div class="card-body">
                    <form onSubmit={(e) => submit(e)} method="HTTP_METHOD" enctype="multipart/form-data">


                      <label className="badge badge-primary badge-shadow" style={{ padding: "8px" }}>Details</label>
                      <div class="row">
                        <div class="form-group col-6">
                          <label for="">Title</label>
                          <input onChange={(e) => handle(e)} id="product_title" type="text" class="form-control" name="product_title" placeholder="e.g PVC" />
                        </div>
                        <div class="form-group col-6">
                          <label for="">Description</label>
                          <input onChange={(e) => handle(e)} id="product_description" type="text" class="form-control" name="product_description" placeholder="e.g high quality pvc" />
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-6">
                          <label for="">Unit</label>
                          <input onChange={(e) => handle(e)} id="product_unit" type="text" class="form-control" name="product_unit" placeholder="e.g kg/meters etc" />
                        </div>
                      </div>
                      <div class="row">
                      <div class="form-group col-4"></div>
                        <div class="form-group col-4">
                          <button type="submit" class="btn btn-success btn-lg btn-block" style={{marginTop:"15px",color:"white"}}>
                            Add Product
                          </button>
                        </div>
                      </div>
                    </form>
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


export default AddProduct;