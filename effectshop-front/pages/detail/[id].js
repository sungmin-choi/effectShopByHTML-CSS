import React,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'
import { ProjectTitle } from '../../styles/loginStyle'
import { useRouter } from 'next/router'
import { Divider } from 'antd'
import styled from 'styled-components'
import Highlighter from '../../components/Highlighter'
import {LOAD_EFFECT_DETAIL_REQUEST} from '../../reducers/effect'
const Container = styled.div`
    display: flex;
    justify-content: center;
    .effect-container{
      position: relative;
      margin: 0;
      padding: 0;
      width: 930px;
      height: 500px;
      font-family: "Montsrrat" sans-serif;
      ${(props)=>props.data.css}
    }
`
const CodeContainer = styled.section`
  width: 80%;
  margin: auto;
  padding-bottom: 20px;
`
const Detail= () => {
  const dispatch = useDispatch();
  const {loadEffectDetailLoading,
         loadEffectDetailDone,
         loadEffectDetailError,
          effectDetail} = useSelector((state)=>state.effect);
  const router  = useRouter();
  useEffect(()=>{
    if(!router.isReady) return;
    const {id} = router.query;
    dispatch({
      type: LOAD_EFFECT_DETAIL_REQUEST,
      data:id,
    })
  },[router.isReady])
  if(loadEffectDetailDone && effectDetail){
    return (
      <div>
      <Head>
        <title>Effect Shop | {effectDetail.title}</title>
      </Head>
      <Link href="/"><a><ProjectTitle>Effect Shop By HTML&CSS</ProjectTitle></a></Link>
      <Divider plain style={{marginTop:'3rem'}}><h1>{`Title: < ${effectDetail.title} >`}</h1></Divider>
      <Container data={effectDetail}>
      <div className="effect-container"  dangerouslySetInnerHTML={{__html:effectDetail.html}}></div>
      </Container>
      <Divider  plain><h1>{`Author: < ${effectDetail.User.nickname} >`}</h1></Divider>
      <CodeContainer>
      <h1>HTML</h1>
      <Highlighter code={effectDetail.html} language="html"/>
      <h1>CSS</h1>
      <Highlighter code={effectDetail.css} language="css"/>
      </CodeContainer>
      </div>
      )
    }
  if(loadEffectDetailError){
    router.push("/404")
  }
    return null
}

export default Detail