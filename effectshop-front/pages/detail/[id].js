import React,{useState,useEffect}from 'react'
import { useRouter } from 'next/router'
import { Divider } from 'antd'
import styled from 'styled-components'
import dummyData from '../../dummyData'

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

const Detail= () => {
  const router  = useRouter();
  const [payLoad,setPayLoad] = useState({});
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    setIsLoading(true);
    const {id} = router.query;
    const data = dummyData.filter((ele)=>ele.id === id);
    setPayLoad(...data);
    setIsLoading(false);
  },[])
  return (
    <>
    {isLoading ? <h1>Loading</h1>
    :(<div>
      <Divider plain ><h1>{payLoad.title}</h1></Divider>
      <Container data={payLoad}>
      <div className="effect-container"  dangerouslySetInnerHTML={{__html:payLoad.html}}></div>
      </Container>
      <Divider/>

    </div>)
    }
    </>
  )
}

export default Detail