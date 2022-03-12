import React, { useCallback, useState } from 'react'
import { Input ,Divider} from 'antd';
import { HeaderWrapper,LinkBox ,DividerWrapper,HeaderBox} from '../styles/headerStyle';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {SEARCH_EFFECTS_REQUEST,FIRST_LOAD_EFFECTS_REQUEST} from '../reducers/effect'
const Header = () => {
  const {me} = useSelector(state=>state.user);
  const [keyword,setKeyword] = useState('');
  const dispatch = useDispatch();
  const onSearch = useCallback(()=>{
    dispatch({
      type: SEARCH_EFFECTS_REQUEST,
      data:keyword
    })
  },[keyword])
  const gotoHome = () =>{
    setKeyword('');
    dispatch({
      type: FIRST_LOAD_EFFECTS_REQUEST
    })
  }
  
  return (
    <>
    <HeaderWrapper >
      <HeaderBox>
        <h1 onClick={gotoHome} className='headerTitle'>Effect Shop By HTML&CSS</h1>
      </HeaderBox>
      <Input.Search
      style={{width:'450px'}}
      placeholder="input search Keyword"
      allowClear
      enterButton="Search"
      size="large"
      value={keyword}
      onChange={(e)=>{
        setKeyword(e.target.value);
      }}
      onSearch={onSearch}
      />
      <LinkBox>
      {me&&me.id ? <Link className='link' href='/users/profile'><a>프로필</a></Link>:
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