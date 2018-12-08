import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Swiper from 'swiper'
import './TenClock.less'
class TenClock extends Component {
  static propTypes = {
    tenfifteen: PropTypes.array.isRequired
  }
  componentDidUpdate (){
    new Swiper('.swiper-container',{
      slidesPerView : 1.1,
      spaceBetween : 20,
    })
  }
  render() {
    const {tenfifteen} = this.props;
    return (
      <div className="TenWrap">
        <div className="title">十点一刻</div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              tenfifteen.map((item,index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    <div className="top">
                      <span className="lines"></span>
                      <span>今日话题</span>
                      <span className="lines"></span>
                    </div>
                    <p className="middle-q">{item.title}</p>
                    <p className="middle-a">{item.desc}</p>
                    <p className="bottom">{item.id}人参与话题</p>
                  </div>
                )
              })
            }
        </div>
      </div>
  </div>
    )
  }
}

export default TenClock;
