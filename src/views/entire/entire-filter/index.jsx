// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames'

const Filter = memo((props) => {
  const [itemList, setItem] = useState([])
  function getItem(item) {
    const newList = [...itemList]
    if(newList.includes(item)) {
      let itemCount = newList.findIndex(filterItem => filterItem === item)
      newList.splice(itemCount, 1)
    } else {
      newList.push(item)
    }
    setItem(newList)
  }


  return (
    <FilterWrapper>
      {
        filterData.map(item => {
          return <div className={classNames("item", {active: itemList.includes(item)})} key={item} onClick={e => getItem(item)}>{item}</div>
        })
      }
    </FilterWrapper>
  )
})

// Filter.propTypes = {}

export default Filter