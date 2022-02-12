import React, { useCallback } from 'react'
import { Input ,Divider} from 'antd';

const Header = () => {

  const onSearch = useCallback(()=>{
    console.log('search');
  },[])
  
  return (
    <header style={{textAlign:'center'}}>
      <div style={{height:'110px',paddingTop:'2rem',marginBottom:'10px'}}>
        <h1 style={{fontSize:'3rem',color:'#02343F'}}>Effect Shop By HTML&CSS</h1>
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
    </header>
  )
}

export default Header