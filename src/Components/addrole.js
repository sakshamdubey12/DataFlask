import React from "react";
import "./addrole.css";
import Navbar from "./navbar";
import SideBar from './sidebar.js';

export default function page1() {
  return (
    <>
    <div>
      {/* <!-- Section: Split screen --> */}
      <section className="main">
    <Navbar/>
        <div className="container-fluid" >
          <div className="row">
            <div className="col-lg-2 vh-100 ">
              <SideBar/>
            </div>
            <div className="col-lg-10 vh-100" id="outer">
              <section className="one">
                <p className="left">
                  <h1>ADD Role</h1>
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
                  {/* </div> */}
                  {/* </nav> */}
                </p>
              </section>
              <div className="container-fluid">
                <section className="two">
                  <p className="left">
                    <h3>Add Role</h3>
                    <hr />
                  </p>
                </section>
                <section id="three">
                  <div className="form">
                    <h5>Role Name:</h5>
                    <input
                      className="form-control"
                      id="three-one"
                      type="text"
                    />
                  </div>
                  <div className="form-group" id="form-group">
                    <h5><label for="comment">Description:</label></h5>
                    <textarea
                      className="form-control"
                      rows="2"
                      id="comment"
                      placeholder="Description"
                    ></textarea>
                  </div>
                    <hr />
                </section>
                <section id="four1">
                  <div id="buttons">
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
      {/* <!-- Section: Split screen --> */}
    </div>
    </>
  );
}
