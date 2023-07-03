import React from "react";

function Packages(){
    return(
        <div className="container" id="packages">
        <h1>PACKAGES</h1>
<div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">₹10000</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">1 Week Plan</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>1 Flight Ticket</li>
              <li>2 star Hotel</li>
              <li>Free Bus Service</li>
              <li>24/7 Support</li>
            </ul>
           
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">₹20000</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">1 Week Plan</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>2 Flight Tickets</li>
              <li>2 star Hotel</li>
              <li>Free Bus Service</li>
              <li>24/7 Support</li>
            </ul>
    
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-white bg-primary border-primary">
            <h4 class="my-0 fw-normal">₹50000</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">2 Weeks Plan</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>2 Flight Tickets</li>
              <li>5 star Hotel</li>
              <li>Free Bus Service</li>
              <li>24/7 Support</li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Packages;