import React from 'react';
import './addintent.css';
import NavBar from "./navbar";
import SideBar from "./sidebar";

export default function addintent() {
  return (
    <div>
      <section className="main">
        <NavBar/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 vh-100 ">
              <SideBar/>
            </div>
            <div className="col-lg-10 vh-100" id="outer">
              <section className="one">
                <p className="left">
                  <h1>ADD Intent</h1>
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
              <div className="container-fluid bg-light" id="cont2">
                <section className="two">
                  <p className="left">
                    <h3>Add Intent</h3>
                    <hr />
                  </p>
                </section>
                <section id="three1">
                  <div className="form">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Goal"
                      />
                    <input
                      className="form-control"
                      placeholder="Intent"
                      type="text"
                    />
                    <input
                      className="form-control"
                      placeholder="Sub Intent"
                      type="text"
                    />
                  </div>
                </section>
                <section id="four">
                  <div className="buttons">
                  <button type="button" className="btn btn-success">Submit</button>
                  <button type="button" className="btn btn-info">Cancel</button>
                  </div>
                </section>
              </div>
            </div>
            </div>
            </div>
        </section>
    </div>
  )
}
