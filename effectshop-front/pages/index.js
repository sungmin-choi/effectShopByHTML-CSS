import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from '../components/Header'
import Items from '../components/Items'
import { useEffect } from 'react'
import {LOAD_EFFECTS_REQUEST } from '../reducers/effect'
import {LOAD_MY_INFO_REQUEST} from '../reducers/user'
import { useDispatch,useSelector} from 'react-redux'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {mainEffects,loadEffectsLoading,hasMoreEffects
        ,likeEffectError,unLikeEffectError,searchEffectsError} = useSelector((state)=>state.effect);
  useEffect(()=>{
    dispatch({
      type:LOAD_MY_INFO_REQUEST
    })
    dispatch({
      type:LOAD_EFFECTS_REQUEST
    })
  },[])

  useEffect(()=>{
    if(likeEffectError){
      alert(likeEffectError);
    }
    if(unLikeEffectError){
      alert(unLikeEffectError);
    }
    if(searchEffectsError === 'No Search'){
      console.log('hhh');
      router.push('/');
    }

  },[likeEffectError,unLikeEffectError,searchEffectsError])

  useEffect(()=>{
    const handleScroll = ()=>{
      const lastId = mainEffects[mainEffects.length-1]?.id; 

      if(window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-100){
        if(!loadEffectsLoading && hasMoreEffects){
          dispatch({
            type:LOAD_EFFECTS_REQUEST,
            lastId
          })
        }
      }
    }
    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[loadEffectsLoading,hasMoreEffects,mainEffects])

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
