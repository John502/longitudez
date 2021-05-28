import Link from 'next/link'
import navSty from '../styles/SideMenu.module.css'
 
const SideMenu = (props) => {
    
  return (
      <div className={navSty.sidemenu}>
        <ul>
          <Link href='/'><li>Home</li></Link>
          <Link href='/maps'><li>Maps</li></Link>
          <Link href='/about'><li>About</li></Link>
        </ul>
      </div>
  )
}

export default SideMenu

