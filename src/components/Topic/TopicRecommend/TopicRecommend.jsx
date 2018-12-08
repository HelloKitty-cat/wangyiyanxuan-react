import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './TopicRecommend.less'

class TopicRecommend extends Component {
  static propTypes = {
    recommendOne: PropTypes.object.isRequired,
    recommendItems: PropTypes.array.isRequired
  }
  render() {
  const {recommendOne,recommendItems} = this.props;
    return (
      <div className="recommend">
        <h3 className="title">{recommendOne.typeName}</h3>
        <div className="itemMajor">
          <img src={recommendOne.picUrl} alt="" />
            <div className="info">
              <div className="infoTop">
                <span className="left">{recommendOne.title}</span>
                <span className="right">{recommendOne.priceInfo}元起</span>
              </div>
              <p className="ellipsis">{recommendOne.subTitle}</p>
            </div>
          {
            recommendItems.map((item,index) => {
              return (
                <div className="items" key={index}>
                  <div className="itemLeft">
                    <p className="ellipsis">{item.title}</p>
                    <p className="ellipsis">{item.subTitle}</p>
                  </div>
                  <div className="itemRight">
                    <img src={item.picUrl} alt="" />
                    <span>{item.typeName}</span>
                  </div>
                </div>
              )
            })
          }
      </div>
  </div>
    )
  }
}

export default TopicRecommend;
