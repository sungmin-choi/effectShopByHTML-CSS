import React from 'react'
import { Tag } from 'antd';
import { HeartFilled, HeartOutlined} from '@ant-design/icons';
import Link from 'next/link';
import { useDispatch,useSelector } from 'react-redux';
import {LIKE_EFFECT_REQUEST, REMOVE_EFFECTS_REQUEST, UNLIKE_EFFECT_REQUEST} from '../reducers/effect';
import { HeartTag,DeleteBtn,EditBtn,UserInfo,EffectCard } from '../styles/itemStyle';
import PropTypes from 'prop-types'
const Item = ({payload,edit}) => {
  const dispatch = useDispatch();

  const id = useSelector((state)=>state.user.me?.id);
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

Item.prototype = {
  edit: PropTypes.bool.isRequired,
  payload: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    html:PropTypes.string,
    css:PropTypes.string,
    User: PropTypes.object,
    Likers: PropTypes.arrayOf(PropTypes.object),
  }).isRequired
}

export default Item