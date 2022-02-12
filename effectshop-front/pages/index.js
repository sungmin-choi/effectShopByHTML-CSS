import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from '../components/Header'
import dummyData from '../dummyData'
import { createGlobalStyle } from 'styled-components'



export default function Home() {
  const Global = createGlobalStyle`
  ${dummyData[0].css}
  `
  return (
    <>
    <Global />
    <Head>
      <title>Effect Shop</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" crossOrigin href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Rowdies:wght@700&display=swap" rel="stylesheet"/>
    </Head>
    <Header />
    <div dangerouslySetInnerHTML={{__html:dummyData[0].html}}>
    </div>
    </>
  )
}
