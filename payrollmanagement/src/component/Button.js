import React, {useState} from 'react';
import style from '../css/componentStyle.module.css'

const Button = (props) => {
    return (
        <button className={style.button}>{props.value}</button>
    )
}

export default Button