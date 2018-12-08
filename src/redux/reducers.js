/*
  包含n个用于生成新的state的函数模块
 */
import {
  HOME_DATA,
  ITEMS_DATA,
  TOPIC_DATA
} from './actions-type'
import {combineReducers} from 'redux'

const init ={
  data: [],
  banner: [],
  saleIndexVO: {},
  cateList: [],
  newItemNewUserList: [],
  tagList: [],
  topicList: [],
  popularItemList: [],
  policyDescList: []
}
function getHomeData(preState=init,action) {
  switch (action.type) {
    case HOME_DATA:
      return action.data;
    default:
      return preState
  }
}
const item = [];
function getItemsData(preState=item,action) {
  switch (action.type) {
    case ITEMS_DATA:
      return action.data;
    default:
      return preState
  }
}
const topic = {
  banner: [],
  column: [],
  recommendOne: {},
  recommendTwo: {},
  recommendThree: {},
  tenfifteen: [],
  zhenOne: {},
  zhenTwo: {},
  zhenThree: {},
  yxLook: {},
  findMore: []
};
function getTopicData(preState=topic,action) {
  switch (action.type) {
    case TOPIC_DATA:
      return action.data;
    default:
      return preState
  }
}

export default combineReducers({
  getHomeData,
  getItemsData,
  getTopicData
})
