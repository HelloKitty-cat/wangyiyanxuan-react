import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './TopicMore.less'
class TopicMore extends Component {
  static propTypes = {
    newArr: PropTypes.array.isRequired
  }
  render() {
    const {newArr} = this.props;
    return (
      <div className="more">
        <div className="title">
          <span className="lines"></span>
          <span>更多精彩</span>
          <span className="lines"></span>
        </div>
        {
          newArr.map((arr,index) => {
            return (
              <div className="items" key={index}>
                <img src={arr.itemPicUrl} alt="1" />
                <p>{arr.title}</p>
              </div>
            )
          })
        }
     </div>
    )
  }
}

export default TopicMore;
