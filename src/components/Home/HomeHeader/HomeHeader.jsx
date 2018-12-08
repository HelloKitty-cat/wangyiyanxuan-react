import React, {Component} from 'react';
import './HomeHeader.less'
import BScroll from 'better-scroll'
import { withRouter } from 'react-router-dom'

class HomeHeader extends Component {
  state = {
    currentIndex: 0
  }
  handleLi = index =>{
    this.setState ({
      currentIndex: index
    })
  }

  componentWillReceiveProps () {
    new BScroll('.navContent',{
      scrollX: true
    })
  }

  toSearch = () => {
    this.props.history.push('/search')
  }

  goToLogin = () =>{
    this.props.history.replace('/login')
  }
  render() {
    const {data} = this.props;
    return (
      <header className="header">
        <div className="headerContent">
          <a className="headerLogo"></a>
          <div className="headerSearchContent" onClick={this.toSearch}>
            <div className="headerSearch">
            <span><i className="iconfont icon-sousuo"></i></span>
            <span>搜索商品,共9771款好物</span>
          </div>
        </div>
          <a href="javascript:;" onClick={this.goToLogin} className="headerBtn" >登录</a>
        </div>
    <div className="navContent">
          <ul className="navList">
            {
              data.map((item,index) => {
                return (
                  <li key={index}>
                    <a href="javascript:;" onClick={ () => this.handleLi(index)} className={index === this.state.currentIndex ? "on" : "null"}>{item.name}</a>
                  </li>
                )
              })
            }

         </ul>
    </div>
  </header>
    )
  }
}

export default withRouter(HomeHeader);
