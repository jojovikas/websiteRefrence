import React, { useState } from "react";
import "./searchinput.css";
import SearchIcon from "@mui/icons-material/Search";
import SelectDrop from "./select/SelectDrop";

const SearchInput = () => {
  const [placeholder, setPlaceholder] = useState("Search your Doctor....");
  const [selectedButton, setSelectedButton] = useState("Doctor");

  const handleDropdownChange = (selectedItem) => {
    setSelectedButton(selectedItem);
    updatePlaceholder(selectedItem);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    updatePlaceholder(buttonName);
  };

  const updatePlaceholder = (type) => {
    switch (type) {
      case "Doctor":
        setPlaceholder("Search the doctor name");
        break;
      case "Hospital":
        setPlaceholder("Enter the hospital name");
        break;
      case "Specialties":
        setPlaceholder("Enter Your Problem Description");
        break;
      default:
        setPlaceholder("Search Your Doctor...");
    }
  };

  return (
    <>
      <section className="serach_section bg-teal-600 py-10">
        <header className="header flex flex-col justify-center items-center">
          <div className="tab-btn py-4">
            <button
              className={`btn btn-primary ${
                selectedButton === "Doctor" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Doctor")}
            >
              Doctor
            </button>
            <button
              className={`btn btn-primary ms-2 ${
                selectedButton === "Hospital" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Hospital")}
            >
              Hospital
            </button>
            <button
              className={`btn btn-primary ms-2 ${
                selectedButton === "Specialties" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Specialties")}
            >
              Specialties
            </button>
          </div>
          <div className="col-sm-5">
            <div className="headerSearch d-flex align-items-center bg-white">
              <div className="selecrDrop cursor position-relative">
                <SelectDrop
                  onChange={handleDropdownChange}
                  selectedItem={selectedButton}
                />
              </div>
              <div className="search">
                <input type="text" placeholder={placeholder} />
                <SearchIcon className="searchIcon cursor" />
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default SearchInput;
