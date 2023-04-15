import React, {useState} from 'react';
import style from '../css/componentStyle.module.css'

const Button = (props) => {
    return (
        <input className={style.button} value={props.value} disabled />
    )
}

export default Button