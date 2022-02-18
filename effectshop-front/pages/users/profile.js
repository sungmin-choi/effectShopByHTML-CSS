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
const Openpen = styled.div`
  margin-top: 10px;

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
  const iframe = `
  <iframe height="400" style="width: 80%;" scrolling="no" title="Untitled" src="https://codepen.io/sungmin-choi-the-sans/embed/jOaZqwb?default-tab=css%2Cresult&editable=true&theme-id=dark" 
  frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href="https://codepen.io/sungmin-choi-the-sans/pen/jOaZqwb">
      Untitled</a> by sungmin-choi (<a href="https://codepen.io/sungmin-choi-the-sans">@sungmin-choi-the-sans</a>)
      on <a href="https://codepen.io">CodePen</a>.
  </iframe>
  `
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
    style={{ width: '300px',marginBottom:'10px'}}
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
    <h3>제출하시기 전에 Openpen 에서 테스트 해 보시고 제출하세요.</h3>
    <Openpen>
    <div dangerouslySetInnerHTML={{__html:iframe}}></div>
    </Openpen>
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