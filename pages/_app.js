import Nav from '@/components/Nav'
import Layout from '../components/Layout.jsx'
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
