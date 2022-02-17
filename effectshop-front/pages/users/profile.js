import React, { useCallback, useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { ProjectTitle } from '../../styles/loginStyle'
import { Divider,Card, Avatar ,Button} from 'antd'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { EditOutlined,SettingOutlined } from '@ant-design/icons';
import Items from '../../components/Items'
const { Meta } = Card;

const Containner = styled.div`
  padding-top: 4rem;
  width: 90%;
  margin:auto;
`
const LogOutBtn = styled(Button)`
  position: absolute;
  right: 5px;
  bottom: 3.5rem;
  background-color: red;
  border-color: red;
  color: white;
  &:hover{
  background-color: red;
  border-color: red;
  color: white;
  }
`
const Profile= () => {
  const router = useRouter();
  const {me} = useSelector((state)=>state.user)
  const dispatch = useDispatch();

  useEffect(()=>{
      if(!(me && me.id)){
          router.push('/');
      }
  },[me && me.id]);

  const handleLogOut = useCallback(()=>{
    dispatch({
      type:'LOG_OUT',
    })
    router.push('/');
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
    style={{ width: '300px' }}
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      
    ]}
    >
    <Meta
      style={{height:'130px',padding:'20px'}}
      avatar={<Avatar>{me.nickname[0].toUpperCase()}</Avatar>}
      title={me.nickname}
      description={me.email}
    />
    <LogOutBtn onClick={handleLogOut} >로그아웃</LogOutBtn>
    </Card>
    <Divider orientation="left" plain>
      My Effects
    </Divider>
    <section>
      <Items isProfile={true} />
    </section>
    </Containner>
    </>
  )
}

export default Profile