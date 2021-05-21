import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  <Layout>
  return <Component {...pageProps} />
  </Layout>
}

export default MyApp
