import { useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import "./output.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Pages/Footer";
import DoctorSlider from "./components/Slider/DoctorSlider";
import Gallery from "./components/Slider/NewSlider";
import SliderNew from "./components/Slider/NewSlider";

function App() {
  return (
    <>
      <Navbar />
      <SearchInput />
      <SliderNew />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="bg-black">
              <DoctorSlider />
            </div>
          </div>
          <div className="col-md-6">
            <Gallery />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
