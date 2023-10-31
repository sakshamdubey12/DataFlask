import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
// import "../App.js";
import "./login.css";

import {
    Link
  } from "react-router-dom";

export default function login() {
  return (
    <>
    <div className="container" id="cont1">
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone" />
        </MDBCol>

        <MDBCol col='4' md='6' id="two">
          <MDBInput wrapperClassName='mb-4' label='Email address' id='email' type='email' size="lg"/>
          <MDBInput wrapperClassName='mb-4' label='Password' id='password' type='password' size="lg"/>

          <Link to="/form"><MDBBtn className="mt-4 mb-4 w-100" size="lg">Sign in</MDBBtn></Link>

        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </>
  );
}


