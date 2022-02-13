import React, { useCallback } from 'react'
import { Input ,Divider} from 'antd';
import styled from 'styled-components';
import {screen} from '../styles/styleConstant';


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
      <div style={{width:'90%',margin:'auto'}}>
      <Divider />
      </div>
    </HeaderWrapper>
    </>
  )
}

export default Header