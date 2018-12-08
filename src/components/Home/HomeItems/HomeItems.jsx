import React, {Component} from 'react';
import './HomeItems.less'
import Swiper from 'swiper'
import PropTypes from 'prop-types'
class HomeItems extends Component {
  static propTypes = {
    cateList: PropTypes.array.isRequired
  }
  componentWillReceiveProps () {
    new Swiper('.swiper-container-food',{
      slidesPerView : 3.2,
      spaceBetween : 20,
    })
  }
  render() {
    const {cateList} = this.props;
    return (
      <div>
        {
          cateList.map((list,index) =>{
            return (
              <div className="itemWrap" key={index}>
                <div className="categoryModule">
                  <img src={list.bannerUrl} alt=""/>
                </div>
                <div className="swiper-container-food">
                  <div className="swiper-wrapper">
                    {
                      list.itemList.map((item,index) =>{
                        return (
                          <div className="swiper-slide" key={index}>
                            <div className="imgWrap">
                              <img src={item.listPicUrl} alt="" />
                            </div>
                            <p className="info ellipsis">{item.name}</p>
                            <p className="price">￥{item.retailPrice}</p>
                            <span className="HotSale">爆品</span>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
  </div>
    )
  }
}

export default HomeItems;
