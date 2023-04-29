import Nav from '@/components/Nav'
import Layout from '../components/Layout'
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Nav/>
      <Component {...pageProps} />
    </Layout>
  )
}
