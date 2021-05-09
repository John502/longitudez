import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'


const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <div className={styles.container}>
         <main className={styles.main}>
        <Header />
        {children}
         Hello
         </main>

        </div>
        </>
    )
}

export default Layout