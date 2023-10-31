import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import Navbar from "./navbar";
import SideBar from './sidebar'
import Center from './centre'
import './mainpage.css';

export default function form() {
  return (
    <>
    <div className="mainContainer">
            <div className='mainContainerOne'>
                <SideBar/>
            </div>
            <div className='mainContainerTwo'>
                <Center/>
            </div>
        </div>
    {/* <section className="main">
        <Navbar/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 vh-105">
              <SideBar/>  
            </div>
            <div className="col-lg-10 vh-105" id="outer">
              
              </div>
            </div>
              </div>
      </section> */}

    {/* <Navbar/>
    <AddRole/> */}
    {/* <AddIntent/> */}
    {/* <BotTraining/> */}
    {/* <AddUser/> */}


    {/* <div className="container mt-5 my-5">
    <form>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='City' />
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this message'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4' block>
        Sign in
      </MDBBtn>
    </form>
    </div> */}
    </>
  );
}