import { useState } from 'react'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'
import { FaCheck } from '@react-icons/all-files/fa/FaCheck'
import { FaPen } from '@react-icons/all-files/fa/FaPen'
import style from './Task.module.css'

function Task({ task, delTask, toggleTask, saveTask }) {
  // state to track edited task
  const [edit, setEdit] = useState(null)

  // state to keep track of the value in the input
  const [savedEdit, setSavedEdit] = useState('')

  // function edit task and save edit task

  const handleEdit = (id, text) => {
    setEdit(id)
    setSavedEdit(text)
  }

  //function to call function in App component (access to todo tasks) and return to default state in edit
  const handleSavedTask = () => {
    saveTask(task.id, savedEdit)
    setEdit(null)
    toggleTask(false)
  }

  const iconX = (
    <FaTimes
      icon={FaTimes}
      className={style.icon}
      onClick={() => delTask(task.id)}
    />
  )
  const iconPen = (
    <FaPen
      icon={FaPen}
      className={style.icon}
      onClick={() => handleEdit(task.id, task.text)}
    />
  )
  const iconSave = <FaCheck className={style.icon} onClick={handleSavedTask} />

  return (
    <div className={style.task}>
      <div
        className={task.completed ? style.task_text_strike : style.task_text}
        onClick={() => toggleTask(task.id)}
      >
        {edit ? (
          <div>
            <input
              type='text'
              className={style.input_edit_task}
              value={savedEdit}
              onChange={(e) => setSavedEdit(e.target.value)}
            />
          </div>
        ) : (
          <div>{task.text}</div>
        )}
      </div>
      <div className={style.icons}>
        {' '}
        {edit ? (
          <div className={style.icons_align}>
            <div>{iconSave}</div>
          </div>
        ) : (
          <div className={style.icons_align}>
            <div> {iconPen}</div>
            <div>{iconX}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Task
