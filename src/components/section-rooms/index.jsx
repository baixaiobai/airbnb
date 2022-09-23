import PropTypes from 'prop-types'
import React, { memo } from 'react'


import RoomItem from '../room-item'
import { SectionWrapper } from './style'


const SectionRoom = memo((props) => {
  const { roomList, width } = props

  return (
    <SectionWrapper>
      {
        roomList?.slice(0, 8)?.map(item => {
          return <RoomItem width={width} key={item.id} item={item}/>
        })
      }
    </SectionWrapper>
  )
})

SectionRoom.propTypes = {
  roomList: PropTypes.array
}

export default SectionRoom