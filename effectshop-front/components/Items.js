import React from 'react'
import styled from 'styled-components';
import Item from './Item';
import {screen} from '../styles/styleConstant';
import PropTypes from 'prop-types'
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
const Items = ({isProfile,effects}) => {
  return (
    <Container>
      {isProfile? effects.map((item)=> <Item key={item.id} payload={item} edit={true} />):
                  effects.map((item)=> <Item key={item.id} payload={item} edit={false} />) }
    </Container>
  )
}

Items.prototype = {
  isProfile: PropTypes.bool.isRequired
}

export default Items