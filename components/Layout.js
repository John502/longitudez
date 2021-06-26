import Meta from './Meta'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'


const Layout = ({children}) => {
    return (
        <>
        <Meta />
        {children}
        <Nav></Nav>

        </>
    )
}



export default Layout