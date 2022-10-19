import Link from "next/link";
import navSty from "../styles/Nav.module.css";
import sideSty from "../styles/SideMenu.module.css";
import React, { Component } from "react";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { showing: false };
  }

  render() {
    var { showing } = this.state;

    const onMenuItemClick = () => {
      setTimeout(() => {
        this.setState({ showing: !showing });
      }, 300);
    };

    const navItems = [
      { key: 1, title: "Home", path: "/" },
      { key: 2, title: "Maps", path: "/maps" },
      { key: 3, title: "Blog", path: "/blogituez" },
      { key: 4, title: "Contact", path: "/contact" },
    ];

    return (
      <>
        <div className={navSty.container}>
          <nav role="navigation" className={navSty.nav}>
            <Link href="/">
              <div className={navSty.logo}>Longitudez</div>
            </Link>
            <div
              className={navSty.inputContainer}
              style={{
                backgroundColor: showing
                  ? "#3b6969"
                  : "var(--primary-background-color)",
              }}
            >
              <input
                type="checkbox"
                id={navSty.tog}
                onChange={() => this.setState({ showing: !showing })}
              ></input>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
        <div style={{ visibility: showing ? "visible" : "hidden" }}>
          <div className={sideSty.sidemenu}>
            <div className={sideSty.menuContainer}>
              <ul>
                {navItems.map((navItem) => (
                  <Link key={navItem.key} href={navItem.path}>
                    <li onClick={onMenuItemClick}>{navItem.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
