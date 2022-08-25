import { GoInfo } from 'react-icons/go'
import style from './Navbar.module.css'

function Navbar() {
  return (
    <nav>
      <div className={style.navbar}>
        <a href='/info'>
          <GoInfo className={style.icon} />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
