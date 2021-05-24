import Head from 'next/head'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'


const Layout = ({children, title, keywords, description}) => {
    return (
        <>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
        <Nav></Nav>

        </>
    )
}

Layout.defaultProps = {
    title: 'Longitudez',
    keywords: 'Maps, GIS, Mapping',
    description: 'Adventures in GIS and mapping'

}

export default Layout