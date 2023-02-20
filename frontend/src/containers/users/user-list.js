import React,{ useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link,useNavigate } from 'react-router-dom';

function UserList() {
  const [data, setData] = useState([{}])

    useEffect(() => {
      axios.get("http://localhost:7000/user/get").then(Response =>{
        console.log(Response.data)
          setData(Response.data)
      }).catch(err =>{
        console.log(err)
      })
      },[]);

      let navigate = useNavigate();
      function editSale(sendData){
         console.log("this is send dataaaaa")
          console.log(sendData)
          navigate("/edituser",{state:{sendData:sendData}})    
        }

       return (
        <>
      <Navbar/>
      <Sidebar/>
      <div className="main-content">
        <section className="section">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>All Users</h4>
                  <div className="card-header-form">
                    <Link to="/adduser" className="btn btn-success ">
                      + Add User
                    </Link>
                  </div>
                </div>
                <div className="card-header mb-3">
                  <div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <div className="input-group-btn ml-1">
                        <button className="btn btn-primary">
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <tbody>
                        <tr className="align-center">
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>Status</th>
                          <th>Action</th>
                         </tr> 
                         {data && data.map(dealerDetails => ( 
                          <tr className="align-center">

                          <td>{dealerDetails.first_name}</td>
                          <td>{dealerDetails.last_name}</td>
                          <td>{dealerDetails.email}</td>
                          <td>{dealerDetails.phone_number}</td>
                          <td>
                            <div className="badge badge-success badge-shadow" style={{padding:"8px"}}>
                              Active
                            </div>
                          </td>
                          <td>
                            <a  onClick={()=>editSale(dealerDetails)} className="btn btn-primary" style={{color:"white"}}>
                              Edit
                            </a>
                          </td>
                        </tr>
                           ))} 
                      </tbody>
                    </table>
                    <div >

                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
        </>
       );
    }

export default UserList;