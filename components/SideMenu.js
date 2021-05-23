import Link from 'next/link'
import navSty from '../styles/SideMenu.module.css'

const SideMenu = () => {

  return (
      <div className={navSty.sidemenu}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
  )
}

export default SideMenu