import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newletter from "./components/Newletter";
import Feature from "./components/Feature";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Feature />
      <Pricing />
      <Newletter />
      <Footer />
    </div> 
  );
}

export default App;
