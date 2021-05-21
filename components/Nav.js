import Link from 'next/link'
import navSty from '../styles/Nav.module.css'

const Nav = () => {
  return (
      <>
        <nav role="navigation" className={navSty.nav}>
        <div className={navSty.navitems}>
        <div className={navSty.logo}>longitudez</div>
        <div className={navSty.inputContainer}>
            <input type="checkbox" id={navSty.tog}></input>
            <div className={navSty.hamburger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        </div>
        </nav>
        <div className={navSty.sidemenu}>
            <ul className={navSty.sidemenuList}>
            <li>Home</li>
            <li>Contact</li>
         </ul>
        </div>
    </>
  )
}

export default Nav