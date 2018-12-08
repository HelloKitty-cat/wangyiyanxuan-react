import React, {Component} from 'react';
import HomeHeader from './HomeHeader/HomeHeader'
import BrandContainer from './BrandContainer/BrandContainer'
import HomeNewsItems from './HomeNewsItems/HomeNewsItems'
import HomeItems from './HomeItems/HomeItems'
import Activity from './Activity/Activity'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import 'swiper/dist/css/swiper.min.css'
import './home.less'
import PropTypes from 'prop-types'


class Home extends Component {
  static propTypes ={
    getHomeData: PropTypes.func.isRequired
  }
  state = {
    isShow: true
  }

  toogleShow = () =>{
    this.setState ({
      isShow: false
    })
  }

  componentDidMount () {
    this.props.getHomeData()

  }
  componentWillReceiveProps (props) {
    this.move = new BScroll('.contentWrap',{
      click: true
    })
  }
  componentDidUpdate () {
    new Swiper('.swiper-container-image',{
      effect : 'coverflow',
      slidesPerView: 1.5,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 30,
        stretch: 10,
        depth: 60,
        modifier: 2,
        slideShadows : true
      },
    })

    new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: this.span,
      },
      autoplay: {
        delay: 3000,
      }
    })
  }

  ShowGift = () =>{
    this.setState ({
      isShow: true
    })
  }

  goTop = () =>{
    this.move.scrollTo(0,0,500)
  }

  render() {
    const {banner,cateList,data,newItemNewUserList,policyDescList,popularItemList,saleIndexVO,tagList,topicList} = this.props.home;
    // 品牌上的截取的数组
    const newArr = tagList.slice(0,4);

    const {isShow} = this.state;
    return (
      <div className='home'>
        <HomeHeader data={data}/>
        <div className="contentWrap">
          <div className="content">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {
                  banner.map((item,index) =>{
                    return (
                      <div className="swiper-slide" key={index}>
                        <img src={item.picUrl} alt="1" />
                      </div>
                    )
                  })
                }
              </div>
              <div className="swiper-pagination" ref={(span)=>this.span=span}></div>
            </div>

            <div className="grow">
              {
                policyDescList.map((item,index) => {
                  return (
                    <div className="growItem" key={index}>
                      <img src={item.icon} alt="√" />
                      <span>{item.desc}</span>
                    </div>
                  )
                })
              }

            </div>

            <BrandContainer newArr={newArr}/>

            <HomeNewsItems newItemNewUserList={newItemNewUserList} popularItemList={popularItemList}/>

            <div className="welfare">
              <img src={saleIndexVO.picUrl} alt=""/>
            </div>

            <div className="special">
              <div className="specialWrap">
                <span>专题精选</span>
                <span><i className="iconfont icon-yuanjiantou"></i></span>
              </div>
            </div>

            <div className="swiper-container-image">
              <div className="swiper-wrapper">
                {
                  topicList.map((top,index) =>{
                    return (
                      <div className="swiper-slide" key={index}>
                        <img src={top.itemPicUrl} alt="" />
                        <div className="img-middle">
                          <span className="ellipsis">{top.title}</span>
                          <span>{top.priceInfo}元起</span>
                        </div>
                        <p className="itemBottom ellipsis">{top.subtitle}</p>
                      </div>
                    )
                  })
                }
            </div>
          </div>

            <HomeItems cateList={cateList}/>

          </div>
        </div>

        <div className="goTop" onClick={this.goTop}>
          <span><i className="iconfont icon-arrow-up"></i></span>
        </div>
        <div className="gift" onClick={this.ShowGift}>
          <span><i className="iconfont icon-liwu"></i></span>
        </div>
        ( <Activity isShow={isShow} toogleShow={this.toogleShow}/>)
      </div>

    )
  }
}

export default Home;
