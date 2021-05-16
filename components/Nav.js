import Link from 'next/link'
import navSty from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav role="navigation" className={navSty.nav}>
    <div className={navSty.navitems}>
    <div className={navSty.logo}>longitudez</div>
    <div>
        <input type="checkbox" className={navSty.tog}></input>
        <div className={navSty.hamburger}>
            <span></span>
            <span></span>
            <span></span>
        </div>
     </div>
    </div>
    </nav>
  )
}

export default Nav