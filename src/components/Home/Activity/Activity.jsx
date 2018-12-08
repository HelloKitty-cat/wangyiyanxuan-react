import React, {Component} from 'react';
import './Activity.less'
import PropTypes from 'prop-types'
class Activity extends Component {
  static propTypes = {
    isShow: PropTypes.bool.isRequired,
    toogleShow: PropTypes.func.isRequired
  }

  handleClick = () =>{
    this.props.toogleShow()
  };

  render() {
    const { isShow } = this.props;
    return (
      isShow ?

        (<div>
          <div className="mask"></div>
          <div className="activity">
            <div className="activityContent">
              <div className="title">
                <span>新人礼</span>
                <span>活动规则 >></span>
              </div>
              <img src="https://yanxuan.nosdn.127.net/964a15876c0d35084ad7b211e91cef94.png?imageView&quality=75" alt="" />
              <button className="btn">立即领取</button>
              <span onClick={this.handleClick} className="goback"><i className="iconfont icon-shanchu"></i></span>
            </div>
          </div>
        </div>) : ''

    )
  }
}

export default Activity;
