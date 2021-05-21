import Link from 'next/link'
import navSty from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <>
      <div className={navSty.container}>
        <nav role="navigation" className={navSty.nav}>
        <div className={navSty.logo}>longitudez</div>
        <div className={navSty.inputContainer}>
            <input type="checkbox" id={navSty.tog}></input>
                <span></span>
                <span></span>
                <span></span>
        </div>
        </nav>
        <div className={navSty.sidemenu}>

        </div>
    </div>
    </>
  )
}

export default Nav