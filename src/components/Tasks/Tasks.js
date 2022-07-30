import React from 'react'
import Task from './Task/Task';
import style from './Tasks.module.css';


function Tasks(props) {

	return (
		<div className={style.tasks}>
			{props.tasks.map(task => <Task
				key={task.id}
				task={task}
				delTask={props.delTask}
				toggleTask={props.toggleTask}
				saveTask={props.saveTask}
			/>)}
		</div>
	)
}

export default Tasks
