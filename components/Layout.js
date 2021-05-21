import Head from 'next/head'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'


const Layout = ({children}) => {
    return (
        <>
        <Head>
        </Head>
        <Nav></Nav>
        </>
    )
}

export default Layout