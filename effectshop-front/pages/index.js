import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from '../components/Header'
import Items from '../components/Items'
import { useEffect } from 'react'
import {LOAD_EFFECTS_REQUEST,FIRST_LOAD_EFFECTS_REQUEST } from '../reducers/effect'
import {LOAD_MY_INFO_REQUEST} from '../reducers/user'
import { useDispatch,useSelector} from 'react-redux'
import wrapper from '../store/configureStore'
import axios from 'axios'
import {END} from 'redux-saga';
function Home() {
  const dispatch = useDispatch();
  const {mainEffects,loadEffectsLoading,hasMoreEffects
        ,likeEffectError,unLikeEffectError,searchEffectsError,
          isSearch} = useSelector((state)=>state.effect);
  useEffect(()=>{
    if(likeEffectError){
      alert(likeEffectError);
    }
    if(unLikeEffectError){
      alert(unLikeEffectError);
    }

  },[likeEffectError,unLikeEffectError,searchEffectsError])

  useEffect(()=>{
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  },[])
  
  useEffect(()=>{
    const handleScroll = ()=>{
      const lastId = mainEffects[mainEffects.length-1]?.id; 
      if(window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-100){
        if(!loadEffectsLoading && hasMoreEffects && !isSearch){
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
  },[loadEffectsLoading,hasMoreEffects,mainEffects,isSearch])

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

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch({
    type: FIRST_LOAD_EFFECTS_REQUEST,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});



export default Home;