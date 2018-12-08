import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './TopicLook.less'
class TopicLook extends Component {
  static propTypes = {
    yxLook: PropTypes.object.isRequired
  }
  render() {
    const {yxLook} = this.props;
    return (
      <div className="look">
        <h3 className="title">严选LOOK</h3>
        <img src={yxLook.picUrl} alt="1" />
          <div className="personInfo">
            <img src={yxLook.avatar} alt="" />
              <span className="username">{yxLook.nickname}</span>
          </div>
          <div className="content">
            {yxLook.content}
          </div>
      </div>
    )
  }
}

export default TopicLook;
