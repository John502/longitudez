import Link from 'next/link'
import navSty from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navSty.nav}>
    <input type="checkbox" className={navSty.tog}></input>
    <div className={navSty.hamburger}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    </nav>
  )
}

export default Nav