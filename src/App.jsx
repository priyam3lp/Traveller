import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Heading from "./components/Heading";
import Reviews from "./components/Reviews";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App(){
    return (
        <div>
   <Navbar />
   <Heading />
   <Home />
   <Reviews />
   <Packages />
   <Contact />
   <Footer />
   
   </div>
 )
}

export default App;