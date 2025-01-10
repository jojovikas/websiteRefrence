//search input text
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
      <header className="header ">
        <div className="tab-btn py-4">
          <button
            className={`btn btn-primary ${selectedButton === "Doctor" ? "active" : ""}`}
            onClick={() => handleButtonClick("Doctor")}
          >
            Doctor
          </button>
          <button
            className={`btn btn-primary ms-2 ${selectedButton === "Hospital" ? "active" : ""}`}
            onClick={() => handleButtonClick("Hospital")}
          >
            Hospital
          </button>
          <button
            className={`btn btn-primary ms-2 ${selectedButton === "Specialties" ? "active" : ""}`}
            onClick={() => handleButtonClick("Specialties")}
          >
            Specialties
          </button>
        </div>
        <div className="col-sm-5">
          <div className="headerSearch d-flex align-items-center">
            <div className="selecrDrop cursor position-relative">
              <SelectDrop onChange={handleDropdownChange} selectedItem={selectedButton} />
            </div>
            <div className="search">
              <input type="text" placeholder={placeholder} />
              <SearchIcon className="searchIcon cursor" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default SearchInput;


// dropdown ###############################################################################################

import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import "./selectdrop.css";

const SelectDrop = ({ onChange, selectedItem }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [isSelectedIndex, setIsSelectedIndex] = useState(0);

  useEffect(() => {
    // Update selected index based on the selected item from the parent
    const indexMap = { "All Data": 0, Doctor: 1, Hospital: 2, Specialties: 3 };
    setIsSelectedIndex(indexMap[selectedItem] || 0);
  }, [selectedItem]);

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, item) => {
    setIsOpenSelect(false);
    setIsSelectedIndex(index);
    if (onChange) {
      onChange(item);
    }
  };

  return (
    <>
      <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
        <div className="selectDropWrapper">
          <span className="openSelect" onClick={openSelect}>
            {selectedItem} <KeyboardArrowDownIcon className="arrow" />
          </span>
          {isOpenSelect && (
            <div className="selectDrop cursor">
              <ul>
                <li
                  onClick={() => closeSelect(0, "All Data")}
                  className={`${isSelectedIndex === 0 ? "active" : ""}`}
                >
                  All Data
                </li>
                <li
                  onClick={() => closeSelect(1, "Doctor")}
                  className={`${isSelectedIndex === 1 ? "active" : ""}`}
                >
                  Doctor
                </li>
                <li
                  onClick={() => closeSelect(2, "Hospital")}
                  className={`${isSelectedIndex === 2 ? "active" : ""}`}
                >
                  Hospital
                </li>
                <li
                  onClick={() => closeSelect(3, "Specialties")}
                  className={`${isSelectedIndex === 3 ? "active" : ""}`}
                >
                  Specialties
                </li>
              </ul>
            </div>
          )}
        </div>
      </ClickAwayListener>
    </>
  );
};

export default SelectDrop;
