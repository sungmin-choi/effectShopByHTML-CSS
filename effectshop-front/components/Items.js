import React from 'react'
import styled from 'styled-components';
import dummyData from '../dummyData';
import Item from './Item';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin:15px;
  padding-bottom: 2rem;
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