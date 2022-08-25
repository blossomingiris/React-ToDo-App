import { v4 as uuidv4 } from 'uuid';
import VideoBg from "./components/VideoBg/VideoBg";
import React, { useState, useEffect } from "react";



function App() {

	//need a state to keep track of tasks
	const [tasks, setTasks] = useState(() => {
		// get the tasks from local storage
		const savedTodos = localStorage.getItem("tasks");
		// if there are tasks stored
		if (savedTodos) {
			// return the parsed JSON object back to a javascript object
			return JSON.parse(savedTodos);
		} else {
			// or return an empty array
			return [];
		}
	})

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks))
	}, [tasks])


	//function to add new task

	const addTask = (userInput) => {
		if (userInput) {
			const newTask = {
				id: uuidv4(),
				text: userInput,
				completed: false,
			}

			setTasks([...tasks, newTask])

		}
	}

	//function to delete task

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	//function toggle task text classes (slashed text)

	const handleToggle = (id) => {
		setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))

	}

	// function to save editing task 

	const saveEditedTask = (id, value) => {
		let newEditTask = [...tasks].map(task => {
			if (task.id === id) {
				task.text = value
				task.completed = false
			}
			return task
		})
		setTasks(newEditTask)
	}


	return (
		<div className="App">
			<VideoBg tasks={tasks}
				delTask={deleteTask}
				addTask={addTask}
				toggleTask={handleToggle}
				saveTask={saveEditedTask}
			/>
		</div>

	);
}

export default App;
