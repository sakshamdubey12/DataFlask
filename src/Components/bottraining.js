import React from "react";
import "./bottraining.css";
import NavBar from './navbar'
import SideBar from './sidebar'

export default function bottraining() {
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
                  <h1>Bot Training</h1>
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

              <div className="container-fluid bg-light" id="cont">
                <section className="two">
                  <p className="left">
                    <h3>Train your Bot</h3>
                    <hr />
                  </p>
                </section>
                <section className="three2">
                  <div class="input-group" id="one">
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Text input with segmented dropdown button"
                      placeholder="Select Bot"
                    />
                    <div class="dropdown">
                      <button
                        type="button"
                        class="btn2 btn-outline-secondary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="sr-only">Toggle Dropdown</span>
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="sub-sec">
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Text input with segmented dropdown button"
                              placeholder="Select Goal"
                            />
                            <div class="input-group-append">
                              <button
                                type="button"
                                class="btn2 btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span class="sr-only">Toggle Dropdown</span>
                              </button>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">
                                  Action
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Text input with segmented dropdown button"
                              placeholder="Select Intent"
                            />
                            <div class="input-group-append">
                              <button
                                type="button"
                                class="btn2 btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span class="sr-only">Toggle Dropdown</span>
                              </button>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">
                                  Action
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="w-100"></div>
                        <div class="col">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Text input with segmented dropdown button"
                              placeholder="Sub Intent"
                            />
                            <div class="input-group-append">
                              <button
                                type="button"
                                class="btn2 btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span class="sr-only">Toggle Dropdown</span>
                              </button>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">
                                  Action
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Text input with segmented dropdown button"
                              placeholder="Add Language"
                            />
                            <div class="input-group-append">
                              <button
                                type="button"
                                class="btn2 btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span class="sr-only">Toggle Dropdown</span>
                              </button>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">
                                  Action
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="four">
                  <h3>Action</h3>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Text input with segmented dropdown button"
                      placeholder="Message"
                    />
                    </div>
                </section>
                <section className="five">
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
  );
}
