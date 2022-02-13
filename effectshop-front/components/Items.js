import React from 'react'
import { Card } from 'antd';
import styled from 'styled-components';
import dummyData from '../dummyData';
import Item from './Item';
const EffectCard = styled(Card)`
    width: 600px;
    height: 400px;
    display: inline-block;
    margin: 10px;

`

const Items = () => {
  return (
    <div style={{textAlign:'center'}}>
      {dummyData.map((item)=> <Item key={item.id} loadPay={item}/>)}
      {dummyData.map((item)=> <Item key={item.id} loadPay={item}/>)}
    </div>
  )
}

export default Items