/*
  包含n个 actions creator创建的函数/对象
  同步actions 返回的是对象
  异步actions 返回的函数
 */
import {
  HOME_DATA,
  ITEMS_DATA,
  TOPIC_DATA
} from './actions-type'
import {
  reqData,
  reqBanner,
  reqsaleIndexVO,
  reqCateList,
  reqnewItemNewUserList,
  reqTagList,
  reqPopularItemList,
  reqPolicyDescList,
  reqTopicList,

  reqCategoryL1List,

  reqTopicBanner,
  reqColumn,
  reqRecommendOne,
  reqRecommendTwo,
  reqRecommendThree,
  reqTenfifteen,
  reqZhenOne,
  reqZhenTwo,
  reqZhenThree,
  reqYxLook,
  reqFindMore
} from '../api'

export function getHomeData() {
  return async dispatch =>{
    const data = await reqData()
    const banner = await reqBanner()
    const saleIndexVO = await reqsaleIndexVO()
    const cateList = await reqCateList()
    const newItemNewUserList = await reqnewItemNewUserList()
    const topicList = await reqTopicList()
    const tagList = await reqTagList()
    const popularItemList = await reqPopularItemList()
    const policyDescList = await reqPolicyDescList()
    let homeData = {
      data: data.data,
      banner: banner.data,
      saleIndexVO: saleIndexVO.data,
      cateList: cateList.data,
      newItemNewUserList: newItemNewUserList.data,
      topicList: topicList.data,
      tagList: tagList.data,
      popularItemList: popularItemList.data,
      policyDescList: policyDescList.data
    }
    dispatch({type: HOME_DATA,data: homeData})
  }
}

export function getItemData() {
  return async dispatch =>{
    const categoryL1List = await reqCategoryL1List()
    const item = categoryL1List.data;
    if (categoryL1List.code === 0){
      dispatch({type: ITEMS_DATA,data: item})
    }
  }
}

export function getTopicData() {
  return async dispatch =>{
    const banner = await reqTopicBanner();
    const column = await reqColumn();
    const recommendOne = await reqRecommendOne();
    const recommendTwo = await reqRecommendTwo();
    const recommendThree = await reqRecommendThree();
    const tenfifteen = await reqTenfifteen();
    const zhenOne = await reqZhenOne();
    const zhenTwo = await reqZhenTwo();
    const zhenThree =  await reqZhenThree();
    const yxLook = await reqYxLook();
    const findMore = await reqFindMore();

    const topicData = {
      banner: banner.data,
      column: column.data,
      recommendOne: recommendOne.data,
      recommendTwo: recommendTwo.data,
      recommendThree: recommendThree.data,
      tenfifteen: tenfifteen.data,
      zhenOne: zhenOne.data,
      zhenTwo: zhenTwo.data,
      zhenThree: zhenThree.data,
      yxLook: yxLook.data,
      findMore: findMore.data
    }
    dispatch({type: TOPIC_DATA,data: topicData})
  }
}
