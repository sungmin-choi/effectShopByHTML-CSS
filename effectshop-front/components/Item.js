import React from 'react'
import { Card,Tag } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import Link from 'next/link';
import styled from 'styled-components';

const UserInfo = styled.div`
  position: absolute;
  right: 1.1rem;
  bottom: 5px;
  z-index: 10;
  background-color: transparent;
  border-radius: 10px;
`
const EffectCard = styled(Card)`
    width: 600px;
    height: 400px;
    display: inline-block;
    margin-top: 20px;
    z-index: 0;
    .effect-container{
      position: relative;
      margin: 0;
      padding: 0;
      height: 340px;
      overflow-y: auto;
      font-family: "Montsrrat" sans-serif;
      ${(props)=>props.data.css}
    }
    @media (max-width:1300px){
      &{
      width: 700px;
      height: 500px;
        .effect-container{
          height: 430px;
        }
      }
    }
`
const Item = ({loadPay}) => {
  return (
    <EffectCard  
    title={loadPay.title} 
    data={loadPay} 
    extra={<Link href={`/detail/${loadPay.id}`}><a>Detail</a></Link>}
    >
      <div className="effect-container"  dangerouslySetInnerHTML={{__html:loadPay.html}}></div>
    <UserInfo>
    <Tag >{`Author: ${loadPay.user.nickname}`}</Tag>
    <Tag ><HeartFilled/>{loadPay.likers.length}</Tag>
    </UserInfo>
    </EffectCard>
  )
}

export default Item