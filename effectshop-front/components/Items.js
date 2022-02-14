import React from 'react'
import styled from 'styled-components';
import dummyData from '../dummyData';
import Item from './Item';
import {screen} from '../styles/styleConstant';

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
const Items = () => {
  return (
    <Container>
      {dummyData.map((item)=> <Item key={item.id} loadPay={item}/>)}
    </Container>
  )
}

export default Items