import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './MainFooter.less'

class MainFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <nav className="footer-nav">
          <NavLink to="/home">
            <span><i className="iconfont icon-shouye"></i></span>
            <span>首页</span>
          </NavLink>
          <NavLink to="/items">
            <span><i className="iconfont icon-category"></i></span>
            <span>分类</span>
          </NavLink>
          <NavLink to="/topic">
            <span><i className="iconfont icon-cubelifangti"></i></span>
            <span>识物</span>
          </NavLink>
          <NavLink to="/cart">
            <span><i className="iconfont icon-gouwuche"></i></span>
            <span>购物车</span>
          </NavLink>
          <NavLink to="/login">
            <span><i className="iconfont icon-geren"></i></span>
            <span>个人</span>
         </NavLink>
      </nav>
    </footer>
    )
  }
}

export default MainFooter;
