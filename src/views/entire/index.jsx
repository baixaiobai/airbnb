import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Filter from './entire-filter'
import Pagination from './entire-pagination'
import Rooms from './entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  // 发送网络请求, 获取数据, 并且保存当前的页面等等.....
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])

  return (
    <EntireWrapper>
      <Filter />
      <Rooms />
      <Pagination />
    </EntireWrapper>
  )
})

export default Entire