

import Link from 'next/link'
import navSty from '../styles/Nav.module.css'
import sideSty from '../styles/SideMenu.module.css'
import React, { Component } from 'react'

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { showing: false };
  }

    render() 
      {
        
      var { showing } = this.state;

      const onMenuItemClick = () => {
        setTimeout(() => {
          this.setState({ showing: !showing })
          }, 300)
      }

      return (
      <>
        <div className={navSty.container}>
          <nav role="navigation" className={navSty.nav}>
          <Link href='/'><div className={navSty.logo}>longitudez</div></Link>
          <div className={navSty.inputContainer} style={{ backgroundColor: (showing ? '#3b6969': 'var(--primary-background-color)')}}>
              <input type="checkbox" id={navSty.tog} onChange={() => this.setState({ showing: !showing })}></input>
                  <span></span>
                  <span></span>
                  <span></span>
          </div>
          </nav>
        </div>
        <div style={{ visibility: (showing ? 'visible' : 'hidden')}}>
        <div className={sideSty.sidemenu}>
        <div className={sideSty.menuContainer}>
          <ul>
            <Link href='/'><li onClick={onMenuItemClick}>Home</li></Link>
            <Link href='/maps'><li onClick={onMenuItemClick}>Maps</li></Link>
            <Link href='/about'><li onClick={onMenuItemClick}>About</li></Link>
          </ul>
        </div>
      </div>
      </div>

      </>
    )
  }
}

