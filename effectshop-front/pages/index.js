import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from '../components/Header'
import Items from '../components/Items'

export default function Home() {
  return (
    <>
    <Head>
      <title>Effect Shop</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" crossOrigin href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Rowdies:wght@700&display=swap" rel="stylesheet"/>
    </Head>
    <Header />
    <section>
      <Items />
    </section>
    </>
  )
}
