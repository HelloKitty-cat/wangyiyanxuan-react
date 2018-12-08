import React, {Component} from 'react';
import './Items.less'
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'
class Items extends Component {
  static propTypes = {
    getItemData: PropTypes.func.isRequired
  }
  state= {
    currentItem: 0
  }
  componentDidMount () {
    this.props.getItemData()
  }
  componentDidUpdate (){
    new BScroll('.right',{
      click: true,
    })
  }
  componentWillReceiveProps () {
    new BScroll('.left',{
      click: true
    })
  }
  handleLeftItems = index =>{
    this.setState({
      currentItem: index
    })
  }
  render() {
    const itemList = this.props.item;
    const rightItems = itemList[this.state.currentItem];
    return (
      <div className="item">
        <div className="headerWrap">
          <div className="header">
            <div className="headerSearch">
            <span><i className="iconfont icon-sousuo"></i></span>
            <span>搜索商品, 共9723款好物</span>
          </div>
        </div>
      </div>
    <div className="itemWrap">
      <div className="left">
        <ul className="leftUl">
          {
            itemList.map((item,index) => {
              return (
                <li key={index} onClick={() => this.handleLeftItems(index)}>
                  <a href="javascript:;" className={index === this.state.currentItem ? 'active' : 'null'}>{item.name}</a>
                </li>
              )
            })
          }
        </ul>
      </div>

    <div className="right">
      {
        rightItems ?
          (<div className="rightWrap">
            <img src={rightItems.wapBannerUrl} alt="1" />
            <div className="title">
              <span className="lines"></span>
              <span></span>
              <span>分类</span>
              <span className="lines"></span>
            </div>

            <ul className="contentWrap">
              {
                rightItems.subCateList.map((item,index) =>{
                  return (
                    <li key={index}>
                      <a href="javascript:;">
                        <img src={item.wapBannerUrl} alt="1" />
                        <span className="ellipsis">{item.name}</span>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>) : ''
      }

  </div>
  </div>
  </div>
    )
  }
}

export default Items;
