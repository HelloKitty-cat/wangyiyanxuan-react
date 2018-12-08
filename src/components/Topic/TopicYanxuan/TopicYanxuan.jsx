import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './TopicYanxuan.less'

class TopicYanxuan extends Component {
  static propTypes = {
    zhenOne: PropTypes.object.isRequired,
    zhenItems: PropTypes.array.isRequired
  }
  render() {
    const {zhenOne,zhenItems} = this.props;
    return (
      <div className="recommend">
        <h3 className="title">{zhenOne.typeName}</h3>
        <div className="itemMajor">
          <img src={zhenOne.picUrl} alt="" />
            <div className="info">
              <div className="infoTop">
                <span className="left">{zhenOne.title}</span>
                <span className="right">{zhenOne.priceInfo}元起</span>
              </div>
              <p className="ellipsis">{zhenOne.subTitle}</p>
            </div>
              {
                zhenItems.map((item,index) => {
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

export default TopicYanxuan;
