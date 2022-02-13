import React from 'react'
import { Card } from 'antd';
import styled from 'styled-components';
import dummyData from '../dummyData';
const EffectCard = styled(Card)`
    width: 600px;
    height: 400px;
    display: inline-block;
    margin: 10px;
    .effect-container{
      margin: 0;
      padding: 0;
      font-family: "Montsrrat" sans-serif;
      ${(props)=>props.data.css}
    }
`
const Item = ({loadPay}) => {
  return (
    <EffectCard  title={loadPay.title} data={loadPay} extra={<a href="#">More</a>}>
      <div className="effect-container"  dangerouslySetInnerHTML={{__html:loadPay.html}}></div>
    </EffectCard>
  )
}

export default Item