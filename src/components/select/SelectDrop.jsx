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
                  onClick={() => closeSelect(0, "Doctor")}
                  className={`${isSelectedIndex === 0 ? "active" : ""}`}
                >
                  Doctor
                </li>
                <li
                  onClick={() => closeSelect(1, "Hospital")}
                  className={`${isSelectedIndex === 1 ? "active" : ""}`}
                >
                  Hospital
                </li>
                <li
                  onClick={() => closeSelect(2, "Specialties")}
                  className={`${isSelectedIndex === 2 ? "active" : ""}`}
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
