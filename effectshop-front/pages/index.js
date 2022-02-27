import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from '../components/Header'
import Items from '../components/Items'
import { useEffect } from 'react'
import {LOAD_EFFECTS_REQUEST } from '../reducers/effect'
import { useDispatch,useSelector} from 'react-redux'
export default function Home() {
  const dispatch = useDispatch();
  const {mainEffects,loadEffectsLoading,hasMoreEffects} = useSelector((state)=>state.effect);
  useEffect(()=>{
    dispatch({
      type:LOAD_EFFECTS_REQUEST
    })
  },[])

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-100){
        if(!loadEffectsLoading && hasMoreEffects){
          dispatch({
            type:LOAD_EFFECTS_REQUEST
          })
        }
      }
    }
    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[loadEffectsLoading])

  return (
    <>
    <Head>
      <title>Effect Shop</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" crossOrigin href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Rowdies:wght@700&display=swap" rel="stylesheet"/>
    </Head>
    <Header/>
    <section>
      <Items effects={mainEffects} isProfile={false}/>
    </section>
    </>
  )
}
