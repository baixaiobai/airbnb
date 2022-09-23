import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PagWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators';

const Pagination1 = memo((props) => {
  // 从redux中获取roomlist数据
  const { roomList, totalCount, currentPage } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage
  }), shallowEqual)
  // 计算总页数
  const total = Math.ceil(totalCount/20)
  const start = currentPage * 20 + 1
  const end = (currentPage + 1) * 20


  // 事件处理函数
  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount) {
    dispatch(fetchRoomListAction(pageCount - 1))
  }



  return (
    <PagWrapper>
      <Pagination count={total} onChange={pageChangeHandle}/>
      <div className='text'>第 {start} - {end} 个房源，共超过 {totalCount} 个</div>
    </PagWrapper>
  )
})

Pagination1.propTypes = {}

export default Pagination1