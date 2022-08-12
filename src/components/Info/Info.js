import { DiGithubAlt } from 'react-icons/di'
import React from 'react'
import style from './Info.module.css'

function Info() {
  let intro = `This is small MVP project - ToDo App.
	ToDo app is an application that allows to manage a list of tasks to do. 
	It performs adding, deleting, editing and toggling state of each task.
 Random motivation quote displayed on click it. App has marine design and basic functionality. 
 	UI is built with ReactJS. 
	You can can find project here: 
	`

  function replaceWithBr() {
    return intro.replace(/\n/g, '<br/>')
  }

  return (
    <article>
      <h2 className={style.info_header}>~ Hello ~</h2>
      <p
        className={style.info}
        dangerouslySetInnerHTML={{ __html: replaceWithBr() }}
      ></p>
      <div className={style.gitHub}>
        <a
          href='https://github.com/blossomingiris'
          target='_blank'
          rel='noreferrer'
        >
          <DiGithubAlt className={style.icon_gitHub} />
        </a>
      </div>
      <div className={style.return}>
        <a href='/' className={style.return_link}>
          ~ back ~
        </a>
      </div>
    </article>
  )
}

export default Info
