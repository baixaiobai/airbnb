import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from "@/services"

// 定义发送异步请求的事件
// 这里如果需要触发多个获取数据的函数的话,不要使用async因为只有上一个执行之后
// 下一个才会执行
export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (extraInfo, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then(res => {
      dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountData().then(res => {
      dispatch(changeDiscountInfoAction(res))
    })
    getHomeHotRecommendData().then(res => {
      dispatch(changeRecommendInfoAction(res))
    })
    getHomeLongforData().then(res => {
      dispatch(changeLongforInfoAction(res))
    })
    getHomePlusData().then(res => {
      dispatch(changePlusInfoAction(res))
    })
  }
)

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  }
})


export const { 
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer