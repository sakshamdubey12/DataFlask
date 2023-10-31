import React from 'react'
import './login.css';
export default function navbar() {
  return (
    <>
    <div id="topbar">
    {/* <!--Navbar--> */}
<nav class="navbar navbar-light light-blue lighten-4">

  {/* <!-- Navbar brand --> */}
  {/* <a class="navbar-brand" href="#">Navbar</a> */}

  <button id="nav1" class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
        class="fas fa-bars fa-1x"></i></span></button>
  {/* <!-- Collapse button --> */}

  {/* <!-- Collapsible content --> */}
  <div class="collapse navbar-collapse" id="navbarSupportedContent1">

    {/* <!-- Links --> */}
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    {/* <!-- Links --> */}

  </div>
  {/* <!-- Collapsible content --> */}

</nav>
{/* <!--/.Navbar--> */}





  {/* <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">My-App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/login">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/form">Contact-Us</a>
        </li>
      </ul>

    </div>
  </div>
</nav> */}
    </div>
      </>
  )
}