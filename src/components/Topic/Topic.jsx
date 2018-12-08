import React, {Component} from 'react';
import TopicRecommend from './TopicRecommend/TopicRecommend'
import TenClock from './TenClock/TenClock'
import TopicYanxuan from './TopicYanxuan/TopicYanxuan'
import TopicLook from './TopicLook/TopicLook'
import TopicMore from './TopicMore/TopicMore'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import './Topic.less'
class Topic extends Component {
  componentDidMount () {
    this.props.getTopicData()
  }
  componentDidUpdate () {
    new Swiper('.swiper-container-banner', {
      slidesPerView: 1.15,
      centeredSlides: true,
      loop: true,
      spaceBetween: 20,
    })

    new Swiper('.swiper-container-list',{
      slidesPerView : 3.8,
      spaceBetween : 20,
    })

    this.scroll = new BScroll('.MoveContent',{
      click: true
    })
  }

  goTop = () => {
    this.scroll.scrollTo(0,0,2000)
  }

  goToHome = () =>{
    this.props.history.replace('/home')
  }
  goToSearch = () =>{
    this.props.history.push('/search')
  }
  goToCart = () =>{
    this.props.history.replace('/cart')
  }

  render() {

    const {banner,column,recommendOne,recommendTwo,recommendThree,tenfifteen,zhenOne,zhenTwo,zhenThree,yxLook,findMore} = this.props.topic;
    const recommendItems = [recommendTwo,recommendThree]
    const zhenItems = [zhenTwo,zhenThree]
    const newArr = findMore.slice(1,7)
    return (
      <div className="topicWrap">
        <header className="topicHeader">
          <div className="topicContent">
            <span onClick={this.goToHome}><i className="iconfont icon-shouye"></i></span>
            <span className="title"></span>
            <span onClick={this.goToSearch}><i className="iconfont icon-sousuo"></i></span>
            <span onClick={this.goToCart}><i className="iconfont icon-gouwuche"></i></span>
          </div>
        </header>
        <div className="MoveContent">
          <div className="content">
          <div className="topic">
            <div className="swiper-container-banner">
              <div className="swiper-wrapper">
                {
                  banner.map((item,index) => {
                    return (
                      <div className="swiper-slide" key={index}>
                        <img src={item.picUrl} alt="1"/>
                        <div className="mask">
                          <div className="maskTop">
                            <span className="maskLines"></span>
                            <span>{item.subTitle}</span>
                            <span className="maskLines"></span>
                          </div>
                          <span className="maskMiddle">{item.title}</span>
                          <span className="maskBottom">{item.desc}</span>
                        </div>
                      </div>
                    )
                  })
                }
            </div>
          </div>
          </div>

          <div className="topicList">
        <div className="swiper-container-list">
          <div className="swiper-wrapper">
            {
              column.map((item,index) =>{
                return (
                  <div className="swiper-slide" key={index}>
                    <img src={item.picUrl} alt="1" />
                    <div className="tNum">{item.articleCount}</div>
                    <p>{item.title}</p>
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>
          <TopicRecommend recommendOne={recommendOne} recommendItems={recommendItems}/>
          <TenClock tenfifteen={tenfifteen}/>
          <TopicYanxuan zhenOne={zhenOne} zhenItems={zhenItems}/>
          <TopicLook yxLook={yxLook}/>
          <TopicMore newArr={newArr}/>
         </div>
        </div>
        <div className="goTop" onClick={this.goTop}>
          <span><i className="iconfont icon-arrow-up"></i></span>
        </div>
    </div>
    )
  }
}

export default Topic;
