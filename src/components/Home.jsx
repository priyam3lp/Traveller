import React from "react";

function Home(){
    return(
        <div className="home">
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/girl-troley.jpg" className="d-block w-100" alt="time-travel"/>
    </div>
    <div className="carousel-item">
      <img src="./images/airport.jpg" className="d-block w-100" alt="travel"/>
    </div>
    <div className="carousel-item">
      <img src="./images/view.jpg" className="d-block w-100" alt="travel-map"/>
    </div>
    <div className="carousel-item">
      <img src="./images/girl-back.jpg" className="d-block w-100" alt="travel-map"/>
    </div>
    <div className="carousel-item">
      <img src="./images/holding-hand.jpg" className="d-block w-100" alt="travel-map"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
    )
}

export default Home;