import { useState } from 'react'
import style from './Form.module.css'
import Button from '../Button/Button'

function Form({ addTask }) {
  const [userInput, setUserInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)

    if (!userInput) {
      alert('Please add some task in your todo')
      return
    }
    setUserInput('')
  }

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <form className={style.taskForm} onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter new task..'
        className={style.taskInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        value={userInput}
      ></input>
      <Button />
    </form>
  )
}

export default Form
