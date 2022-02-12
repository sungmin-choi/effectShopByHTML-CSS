import '../styles/globals.css'
import 'antd/dist/antd.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" crossOrigin href="https://fonts.gstatic.com"  />
    <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Rowdies:wght@700&display=swap" rel="stylesheet"/>
  </Head>
  <Component {...pageProps} />
  </>)
}

export default MyApp
