

import Link from 'next/link'
import SideMenu from './SideMenu'
import navSty from '../styles/Nav.module.css'

import React, { Component } from 'react'

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { showing: false };
  }

    render() 
      {
        
      const menu = SideMenu()
      
      const { showing } = this.state;

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
        <div style={{ visibility: (showing ? 'visible' : 'hidden'), transition: 'opacity 300ms ease-in-out'}}>
          <SideMenu shown={(showing ? 'true' : 'false')}/>
        </div>
      </>
    )
  }
}

