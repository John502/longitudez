
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
        </nav>
    )
}

export default Nav