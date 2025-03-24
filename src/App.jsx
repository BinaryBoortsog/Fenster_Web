import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import News from "./components/News";
import Footer from "./components/Footer";
import Contact from "./pages/contact"; 
import Tolgoi from "./pages/Product/tolgoi";
import Buteegdehuun from "./pages/Product/buteegdehuun";
import Window from "./pages/Product/window";
import Metal from "./pages/Product/Metal";
import Pasad from "./pages/Product/Pasad";
export const App = () => {
  return (
    <Router>
      <Navbar />
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
        <Route path="/productuud" element={
          <div>
            <Tolgoi/>
            <Buteegdehuun/>
          </div>
          } 
          />
          <Route path="/window" element={
          <div>
            <Window/>
          </div>
          }
          />
          <Route path="/metal" element={
          <div>
            <Metal/>
          </div>
          }
          />
          <Route path="/pasad" element={
          <div>
            <Pasad/>
          </div>
          }
          />

      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
