import Link from 'next/link'
import SideMenu from './SideMenu'
import navSty from '../styles/Nav.module.css'

const Nav = () => {
  function toggleMenu(e) {
    console.log("Hello");
  }

  return (
    <>
      <div className={navSty.container}>
        <nav role="navigation" className={navSty.nav}>
        <div className={navSty.logo}>longitudez</div>
        <div className={navSty.inputContainer}>
            <input type="checkbox" id={navSty.tog} onChange={toggleMenu}></input>
                <span></span>
                <span></span>
                <span></span>
        </div>
        </nav>
      </div>
      <SideMenu></SideMenu>
    </>
  )
}

export default Nav