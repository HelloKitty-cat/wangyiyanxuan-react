import React, {Component} from 'react';
import './BrandContainer.less'
import PropTypes from 'prop-types'
class BrandContainer extends Component {
  static propTypes = {
    newArr: PropTypes.array.isRequired
  }
  render() {
    const {newArr} = this.props;
    return (
      <div className="brandContainer">
        <div className="brandHeader">
          <span>品牌制造商直供</span>
          <span><i className="iconfont icon-yuanjiantou"></i></span>
        </div>
        <div className="brandItemContainer">
          {
            newArr.map((item,index) => {
              return (
                <a href="javascript:;" key={index}>
                  <img src={item.picUrl} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{item.floorPrice}元起</p>
                </a>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default BrandContainer;
