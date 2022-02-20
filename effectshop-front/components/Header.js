import React, { useCallback } from 'react'
import { Input ,Divider} from 'antd';
import styled from 'styled-components';
import {screen} from '../styles/styleConstant';
import Link from 'next/link';
import { useSelector } from 'react-redux';


const DividerWrapper = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
  padding-bottom: 1rem;
`
const LinkBox = styled.div`
  position: absolute;
  right: 5%;
  top:17%;
  font-size: 20px;
  @media (max-width:${screen.mobile}px){
    &{
      margin-top: 10px;
      text-align: center;
      position: relative;
    }
  }
`

const HeaderWrapper = styled.header`
  font-family: 'Mochiy Pop P One', sans-serif;
  font-family: 'Rowdies', cursive;
  text-align: center;
  .headerTitle{
    color: #303952;
    font-size: 3rem;
  }
  
  @media (max-width:${screen.tablet}px){
    .headerTitle{
      font-size: 2.5rem;
    }
  }
  @media (max-width:${screen.mobile}px){
    .headerTitle{
      font-size: 2rem;
    }
  }

`

const Header = () => {
  const onSearch = useCallback(()=>{
    console.log('search');
  },[])
  const {me} = useSelector(state=>state.user);
  return (
    <>
    <HeaderWrapper>
      <div  style={{height:'110px',paddingTop:'2rem',marginBottom:'10px'}}>
        <h1 className='headerTitle'>Effect Shop By HTML&CSS</h1>
      </div>
      <Input.Search
      style={{width:'450px'}}
      placeholder="input search Keyword"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      />
      <LinkBox>
      {me ? <Link className='link' href='/users/profile'><a>프로필</a></Link>:
      <Link className='link' href='/users/login'><a>로그인</a></Link>}
      </LinkBox>
      <DividerWrapper>
      <Divider />
      </DividerWrapper>
    </HeaderWrapper>
    </>
  )
}

export default Header