import React from 'react'
import { Card } from 'antd';
import styled from 'styled-components';
const EffectCard = styled(Card)`
    width: 600px;
    height: 400px;
    display: inline-block;
    margin: 10px;
    
`

const Items = ({effectData}) => {
  return (
    <div style={{textAlign:'center'}}>
    <EffectCard  title="Card title" extra={<a href="#">More</a>}>
      Inner Card content
    </EffectCard>
    <EffectCard  title="Card title" extra={<a href="#">More</a>}>
      Inner Card content
    </EffectCard>
    <EffectCard  title="Card title" extra={<a href="#">More</a>}>
      Inner Card content
    </EffectCard>
    <EffectCard  title="Card title" extra={<a href="#">More</a>}>
      Inner Card content
    </EffectCard>
    </div>
  )
}

export default Items