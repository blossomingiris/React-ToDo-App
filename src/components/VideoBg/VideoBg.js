import React from 'react'
import video from '../../assets/Video/bg.webm'
import Card from '../Card/Card'
import style from './VideoBg.module.css';


function VideoBg(props) {
	return (
		<div className={style.videoBg}>
			<video src={video} autoPlay loop muted></video>
			<Card tasks={props.tasks}
				delTask={props.delTask}
				addTask={props.addTask}
				toggleTask={props.toggleTask}
				saveTask={props.saveTask}
			/>
		</div>
	)
}

export default VideoBg