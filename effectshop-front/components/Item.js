import React from 'react'
import { Card,Tag ,Button} from 'antd';
import { HeartFilled } from '@ant-design/icons';
import Link from 'next/link';
import styled from 'styled-components';

const DeleteBtn = styled(Button)`
  background-color: red;
  border-color: red;
  color: white;
  &:hover{
  background-color: red;
  border-color: red;
  color: white;
  }
  position: absolute;
  bottom: 5px;
  left: 7px;
`

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
const Item = ({payload,edit}) => {
  return (
    <EffectCard  
    title={payload.title} 
    data={payload} 
    extra={<Link href={`/detail/${payload.id}`}><a>Detail</a></Link>}
    >
      <div className="effect-container"  dangerouslySetInnerHTML={{__html:payload.html}}></div>
    <UserInfo>
    <Tag >{`Author: ${payload.user.nickname}`}</Tag>
    <Tag ><HeartFilled/>{payload.likers.length}</Tag>
    </UserInfo>
    {edit? <DeleteBtn>삭제하기</DeleteBtn>: null}
    </EffectCard>
  )
}

export default Item