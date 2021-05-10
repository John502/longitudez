
import headerSty from '../styles/Header.module.css'

const Nav = () => {
    return (
        <nav className={headerSty.navbar}>
            <div className={headerSty.logo}>longitudez</div>
            <div className={headerSty.hamburgerMenu}>
				<input type="checkbox"></input>
				<div id={headerSty.spanGroup}>
					<span></span>
					<span></span>
					<span></span>
				</div>
            </div>
            <div className={headerSty.sidebar}>
                <ul className={headerSty.sidebarList}>
                    <li>Home</li>
                    <l1>Maps</l1>
                    <li>Data</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

        </nav>
    )
}

export default Nav