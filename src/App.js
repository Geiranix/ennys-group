import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Products from "./pages/Products";
import Sustainability from "./pages/Sustainability";
import EsgPolicy from "./components/EsgPolicy";
import EudrPolicy from "./components/EudrPolicy";
import RainForestPolicy from "./components/RainForestPolicy"
import HumanRightsPolicy from "./components/HumanRightsPolicy";
import MiniServices from "./components/MiniServices";
import Culture from "./components/Culture";
import Management from "./components/Management";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css"

function App() {
  return (
    <div className="app">

    <Router>
      <Navbar/>
      <ScrollToTop />
      <main className="content">
          <Routes>
         <Route path="/" element={<Home/>}/> 
         <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/company/ourculture" element={<Culture />} />
          <Route path="/company/management" element={<Management />} />
          <Route path="/services" element={<MiniServices/>} />
          <Route path="/contact-us" element={<Contact/>}/>
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/sustainability/rainforestpolicy" element={<RainForestPolicy/>} />
        <Route path="/sustainability/esgpolicy" element={<EsgPolicy/>}/>
        <Route path="/sustainability/eudrpolicy" element={<EudrPolicy/>}/>
        <Route path="/sustainability/humanrightspolicy" element ={<HumanRightsPolicy/>}/>
      </Routes>
      </main>
      
     <Footer/>
    </Router>
    

    </div>
    
    
  );
}

export default App;
