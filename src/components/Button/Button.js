import React from 'react'
import style from './Button.module.css';

function Button() {

	let btnName = 'add'

	return (
		<button className={style.btn}>{btnName}</button>
	)
}

export default Button