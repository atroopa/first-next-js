import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pars Click - Home</title>
        <meta name="keyword" content="home , persian, iranian , parsclick, tutorial"/>
      </Head>
      <div className='text-5xl'>
        Welcome to next
      </div>
    </div>
  )
}
