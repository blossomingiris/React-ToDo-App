import style from './Header.module.css'

function Header() {
  let nameApp = 'My ToDo App'

  return (
    <div className={style.header}>
      <h1 className={style.name}>{nameApp}</h1>
    </div>
  )
}

export default Header
