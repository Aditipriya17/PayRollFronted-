import React, {useState} from 'react';
import style from '../css/componentStyle.module.css'

const InputField = (props) => {
    const {inputText, setInputText} = props;

    const handleInputChange = (event) => {
        setInputText(event.target.value)
    }

    return (
        <React.Fragment>
            <input
                className={style.basicInputTextField}
                type='text'
                value={inputText}
                onChange={handleInputChange}
                placeholder={props.placeholder}/>
        </React.Fragment>
    )
}

export default InputField