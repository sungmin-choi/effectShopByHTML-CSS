import React, { useEffect, useState } from 'react'
import { Card,Tag ,Button} from 'antd';
import { HeartFilled, HeartOutlined} from '@ant-design/icons';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch,useSelector } from 'react-redux';
import {LIKE_EFFECT_REQUEST, REMOVE_EFFECTS_REQUEST, UNLIKE_EFFECT_REQUEST} from '../reducers/effect';

const HeartTag = styled(Tag)`
  cursor: pointer;
`
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

const EditBtn = styled(Button)`
  position: absolute;
  bottom: 5px;
  left: 6rem;
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
  const dispatch = useDispatch();

  const id = useSelector((state)=>state.user.me?.id);
  const {likeEffectError,unLikeEffectError, mainEffects} = useSelector((state)=>state.effect);

  const unLikeEffect = () =>{
    dispatch({
      type: UNLIKE_EFFECT_REQUEST,
      data: payload.id
    })
  }

  const likeEffect = () =>{
    dispatch({
      type: LIKE_EFFECT_REQUEST,
      data: payload.id
    })
  }
  const hasLike = payload.Likers.find((v)=>v.id===id);
  const deleteEffect = ()=>{
    const result =window.confirm('정말로 지우시겠습니까?')
    if(result){
      dispatch({
        type:REMOVE_EFFECTS_REQUEST,
        data: payload.id
      })
    }
  }
  
  return (
    <EffectCard  
    title={payload.title} 
    data={payload} 
    //<Link href={`/detail/${payload.id}`}><a>Detail</a></Link>
    extra={<Link href={`/detail/${payload.id}`}><a>Detail</a></Link>}
    >
      <div className="effect-container"  dangerouslySetInnerHTML={{__html:payload.html}}></div>
    <UserInfo>
    <Tag >{`Author: ${payload.User.nickname}`}</Tag>
    <HeartTag >{hasLike?<HeartFilled onClick={unLikeEffect} />:
                        <HeartOutlined onClick={likeEffect} />}{payload.Likers.length}</HeartTag>
    </UserInfo>
    {edit? <><DeleteBtn onClick={deleteEffect}>삭제하기</DeleteBtn>
              <EditBtn>수정하기</EditBtn>
            </>: null}
    </EffectCard>
  )
}

export default Item