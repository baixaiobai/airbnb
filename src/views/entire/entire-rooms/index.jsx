import RoomItem from '@/components/room-item'
// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { RoomWrapper } from './style'


const Rooms = memo((props) => {
  // 从redux中获取roomlist数据
  const { roomList, totalCount } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)


  return (
    <RoomWrapper>
      <h2 className='title'>{totalCount}多处住所</h2>
      <div className='list'>
        {
          roomList.map(item => {
            return <RoomItem item={item} width="20%" key={item._id}/>
          })
        }
      </div>
    </RoomWrapper>
  )
})

// Rooms.propTypes = {}

export default Rooms