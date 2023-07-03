import React from "react";

function Navbar(){
    return (
        <div>
           <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="./airplane-fill.svg" alt="airplane-img" height={30}></img>Traveller</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#reviews-section">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#packages">Packages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact-section">Contact</a>
        </li>
    

      </ul>
     
    </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar;