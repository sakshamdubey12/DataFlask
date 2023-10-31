import React from "react";
import './adduser.css';
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function adduser() {
  return (
    <div>
      <section className="main">
        <Navbar/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 vh-105">

              <Sidebar/>
            </div>
            <div className="col-lg-10 vh-105" id="outer">
              <section className="one">
                <p className="left">
                  <h1>Add User</h1>
                </p>
                <p className="right">
                  {/* <nav className="navbar navbar-light bg-light"> */}
                  {/* <div className="container-fluid"> */}
                  <form className="d-flex">
                    <input
                      className="search"
                      type="search"
                      placeholder="Search for.."
                      aria-label="Search"
                    />
                    <button className="btn1" type="submit">
                      GO!
                    </button>
                  </form>
                </p>
              </section>

              <div className="container-fluid bg-light" id="const3">
                <section className="two">
                  <p className="left">
                    <h3>Input Details</h3>
                    <hr />
                  </p>
                </section>
              
              <section className="three">
                <form>
                  <div class="form-group">
                    <label className="label" for="exampleInputUserName">User Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputUserName"
                      aria-describedby="userhelp"
                      placeholder="Enter User Name"
                    />
                  </div>
                  <div class="form-group">
                    <label className="label" for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label className="label" for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label className="label" for="exampleInputConfirmPassword1">Confirm Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputConfirmPassword"
                      placeholder="Confirm Password"
                    />
                  </div>
                    <label htmlFor="" className="label">Select Role</label>
                  <div className="tick">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                    Sales
                </label>
                </div>
                </div>
                  <div className="tick">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                    TECH
                </label>
                </div>
                </div>
                  <div className="tick">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                    Analytics
                </label>
                </div>
                </div>
                  <div className="tick">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                    Customer Support
                </label>
                </div>
                </div>
                  <div className="tick">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                    INSURANCE
                </label>
                </div>
                </div>
                <div class="form-group">
                    <label className="label" for="exampleInputFirstName">First Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputFirstName"
                      aria-describedby="userhelp"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div class="form-group">
                    <label className="label" for="exampleInputLastName">Last Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputLastName"
                      aria-describedby="userhelp"
                      placeholder="Enter Last Name"
                    />
                  </div>
                  
                </form>
              </section>
              <section id="four2">
                  <div id="buttons2">
                  <button type="button" className="btn btn-success">Submit</button>
                  <button type="button" className="btn btn-info">Cancel</button>
                  <button type="button" className="btn btn-info">Reset</button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
