import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Product from "./components/Product";
import Contact from "./pages/contact";
import Buteegdehuun from "./pages/Product/buteegdehuun";
import Metal from "./pages/Product/Metal";
import Pasad from "./pages/Product/Pasad";
import Tolgoi from "./pages/Product/tolgoi";
import Window from "./pages/Product/window";
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
