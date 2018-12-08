import React, {Component} from 'react';
import './HomeNewsItems.less'
import Swiper from 'swiper'
import PropTypes from 'prop-types'
class HomeNewsItems extends Component {
  static propTypes = {
    popularItemList: PropTypes.array.isRequired,
    newItemNewUserList: PropTypes.array.isRequired
  }
  componentWillReceiveProps () {
    new Swiper('.swiper-container-Item',{
      slidesPerView : 2.5,
      spaceBetween : 20,
    })
    new Swiper('.swiper-container-Item-bottom',{
      slidesPerView : 2.5,
      spaceBetween : 20,
    })
  }
  render() {
    const {popularItemList,newItemNewUserList} = this.props;
    return (
      <div>
        <div className="newItems">
          <div className="newItemsWrap">
            <span>新品首发</span>
            <div className="findAll">查看全部 ></div>
          </div>
          <div className="swiper-container-Item">
            <div className="swiper-wrapper">
              {
                newItemNewUserList.map((list,index) => {
                  return (
                    <div className="swiper-slide" key={index}>
                      <div className="imgWrap">
                        <img src={list.listPicUrl} alt={list.name}/>
                      </div>
                      <span className="news" >新品</span>
                      <p className="ellipsis foods">{list.name}</p>
                      <p className="info ellipsis">{list.simpleDesc}</p>
                      <p className="price">￥{list.retailPrice}</p>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </div>

        <div className="newItems">
          <div className="newItemsWrap">
            <span>人气推荐.好物精选</span>
            <div className="findAll">查看全部 ></div>
          </div>
          <div className="swiper-container-Item-bottom">
            <div className="swiper-wrapper">
              {
                popularItemList.map((list,index) =>{
                  return (
                    <div className="swiper-slide" key={index}>
                      <div className="imgWrap">
                        <img src={list.listPicUrl} alt={list.name} />
                      </div>
                      <span className="news" >新品</span>
                      <p className="ellipsis foods">{list.name}</p>
                      <p className="info ellipsis">{list.simpleDesc}</p>
                      <p className="price">￥{list.retailPrice}</p>
                    </div>
                  )
                })
              }
          </div>
        </div>
       </div>
    </div>
    )
  }
}

export default HomeNewsItems;
