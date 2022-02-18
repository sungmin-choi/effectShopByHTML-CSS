import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import dummyData from '../dummyData';
import Item from './Item';
import {screen} from '../styles/styleConstant';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1300px;
  margin:auto;
  padding-bottom: 2rem;

  @media (max-width:1300px){
    &{
      width: 830px;
      justify-content: center;
    }
  }
  @media (max-width:${screen.mobile}px){
    
  }
`

//{dummyData.map((item)=> <Item key={item.id} loadPay={item}/>)}
const Items = ({isProfile}) => {
  const [items, setItems] = useState(dummyData);
  const {me} = useSelector((state)=>state.user);
  
  useEffect(()=>{
    if(isProfile && (me&&me.id)){
      setItems(items.filter((item)=>item.userId ===me.id))
    }
  },[])
  
  return (
    <Container>
      {isProfile? items.map((item)=> <Item key={item.id} loadPay={item} edit={true} />):
                  items.map((item)=> <Item key={item.id} loadPay={item} edit={false} />) }
    </Container>
  )
}

Items.prototype = {
  isProfile: PropTypes.bool.isRequired
}

export default Items