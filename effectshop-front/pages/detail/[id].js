import React,{useState,useEffect}from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ProjectTitle } from '../../styles/loginStyle'
import { useRouter } from 'next/router'
import { Divider } from 'antd'
import styled from 'styled-components'
import dummyData from '../../dummyData'
import Highlighter from '../../components/Highlighter'
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
  const router  = useRouter();
  const [payLoad,setPayLoad] = useState({});
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    if(!router.isReady) return;
    const {id} = router.query;
    const data = dummyData.filter((ele)=>ele.id === id);
    setPayLoad(...data);
    setIsLoading(false);
  },[router.isReady])
  if(isLoading){
    return (
      <>
      <Head>
      <title>Effect Shop | please wait</title>
      </Head>
      <h1>Loading</h1>
      </>
    )
  }else{
    return (
      <div>
      <Head>
        <title>Effect Shop | {payLoad.title}</title>
      </Head>
      <Link href="/"><a><ProjectTitle>Effect Shop By HTML&CSS</ProjectTitle></a></Link>
      <Divider plain style={{marginTop:'3rem'}}><h1>{`Title: < ${payLoad.title} >`}</h1></Divider>
      <Container data={payLoad}>
      <div className="effect-container"  dangerouslySetInnerHTML={{__html:payLoad.html}}></div>
      </Container>
      <Divider  plain><h1>{`Author: < ${payLoad.User.nickname} >`}</h1></Divider>
      <CodeContainer>
      <h1>HTML</h1>
      <Highlighter code={payLoad.html} language="html"/>
      <h1>CSS</h1>
      <Highlighter code={payLoad.css} language="css"/>
      </CodeContainer>
      </div>
      )
    }
}

export default Detail