import React, { useCallback, useEffect} from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { ProjectTitle } from '../../styles/loginStyle'
import { Divider,Card, Avatar } from 'antd'
import { useRouter } from 'next/router'
import { EditOutlined,SettingOutlined,LoadingOutlined} from '@ant-design/icons';
import PostForm from '../../components/PostForm'
import { LOG_OUT_REQUEST } from '../../reducers/user'
import Items from '../../components/Items';
import {Containner,LogOutBtn} from '../../styles/profileStyle'

const { Meta } = Card;



const Profile= () => {
  const router = useRouter();
  const {me,logOutLoading,logOutDone} = useSelector((state)=>state.user)
  const dispatch = useDispatch();

  useEffect(()=>{
      if(!(me && me.id)){
        router.push('/');
      }else if(logOutDone){
        router.push('/');
      }
  },[me && me.id,logOutDone]);

  const handleLogOut = useCallback(()=>{
    dispatch({
      type:LOG_OUT_REQUEST,
    })
  },[])

  if(!me){
    return null;
  }
  return (
    <>
     <Link href="/"><a><ProjectTitle>Effect Shop By HTML&CSS</ProjectTitle></a></Link>
    <Containner>
      <h1 style={{fontSize:'32px'}}>내 프로필</h1>
      <Divider />
      <Card
    style={{ width: '250px',marginBottom:'10px'}}
    >
    <Meta
      style={{height:'130px',padding:'20px'}}
      avatar={<Avatar>{me.nickname[0].toUpperCase()}</Avatar>}
      title={me.nickname}
      description={me.email}
    />
    <LogOutBtn onClick={handleLogOut} >{logOutLoading? <LoadingOutlined/>:''}로그아웃</LogOutBtn>
    </Card>
    <h2>제출하시기 전에 꼭 테스트 해 보시고 제출하세요.</h2>
    <PostForm />
    <Divider orientation="left" plain>
      My Effects
    </Divider>
    <section>
       <Items isProfile={true} effects={me.Effects}/> 
    </section>
    </Containner>
    </>
  )
}

export default Profile