import React from 'react'
import Tasks from '../Tasks/Tasks';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Quote from '../Quote/Quote';
import Navbar from '../Navbar/Navbar';
import Info from '../Info/Info';
import style from './Card.module.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function Card(props) {

	return (
		//route
		<BrowserRouter>
			<div className={style.card}>
				<Routes>
					<Route path='/'
						element={<>
							<Navbar />
							<Header />
							<Quote />
							<Form addTask={props.addTask} />
							{props.tasks.length > 0 ? (
								<Tasks tasks={props.tasks}
									delTask={props.delTask}
									toggleTask={props.toggleTask}
									saveTask={props.saveTask}
								/>)
								: (<div className={style.warning}><p>List of your ToDo is empty</p></div>)}
						</>} />
					<Route path='/info' element={<Info />} />
				</Routes>
			</div>
		</BrowserRouter>

	)
}


export default Card