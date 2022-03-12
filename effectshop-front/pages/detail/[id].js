import React from 'react'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'
import { ProjectTitle } from '../../styles/loginStyle'
import { useRouter } from 'next/router'
import { Divider } from 'antd'
import Highlighter from '../../components/Highlighter'
import {LOAD_EFFECT_DETAIL_REQUEST} from '../../reducers/effect'
import wrapper from '../../store/configureStore'
import {END} from 'redux-saga';
import { Container,CodeContainer } from '../../styles/detailIdStyle'
const Detail= () => {
  const {loadEffectDetailDone,
         loadEffectDetailError,
          effectDetail} = useSelector((state)=>state.effect);
  const router  = useRouter();
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

export async function getStaticPaths() {
  return {
    paths:[],
    fallback: true,
  };
}


export const getStaticProps =wrapper.getStaticProps((store) => async ({ params }) => {
  store.dispatch({
    type: LOAD_EFFECT_DETAIL_REQUEST,
    data: params.id
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});



export default Detail