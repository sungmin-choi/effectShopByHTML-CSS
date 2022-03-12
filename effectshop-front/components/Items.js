import React from 'react'

import Item from './Item';
import { Container } from '../styles/itemsStyle';
import PropTypes from 'prop-types'


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