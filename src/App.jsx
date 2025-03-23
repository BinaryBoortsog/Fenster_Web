import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import News from "./components/News";
import Footer from "./components/Footer";
import Contact from "./pages/contact"; 
import Tolgoi from "./pages/Product/tolgoi";

export const App = () => {
  return (
    <Router>
      
      <Navbar /> {/* Navbar should be on all pages */}
      <Routes>
        {/* Home Route with Hero Section */}
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Product />
              <News />
            </div>
          }
        />

        {/* Contact Page */}
        <Route path="/contact" element={
          <Contact />
          } />
        <Route path="/tolgoi" element={
          <Tolgoi/>
          } 
          />

      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
