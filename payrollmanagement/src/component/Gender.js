import React, { useState } from 'react';
import style from '../css/componentStyle.module.css'

const RadioButton = (props) => {
  const {selectedOption, setSelectedOption} = props;

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div className={style.genderInputRadioBtn}>
      <label className={style.genderInputRadioBtn}>
        <input
          type="radio"
          value="M"
          checked={selectedOption === "M"}
          onChange={handleOptionChange}
        />
        Male
      </label>
      <label className={style.genderInputRadioBtn}>
        <input
          type="radio"
          value="F"
          checked={selectedOption === "F"}
          onChange={handleOptionChange}
        />
        Female
      </label>
    </div>
  );
}

export default RadioButton;
