import React, {Component} from 'react';
import './Cart.less'
import bgPic from '../../assets/images/cart.png'
class Cart extends Component {
  goToLogin = () =>{
    this.props.history.replace('/login')
  }
  render() {
    return (
      <div>
        <div className="header">购物车</div>
        <ul className="explain">
          <li>
            <span><i className="iconfont icon-kongxinyuan"></i></span>
            <span>30天无忧退货</span>
          </li>
          <li>
            <span><i className="iconfont icon-kongxinyuan"></i></span>
            <span>48小时快速退款</span>
          </li>
          <li>
            <span><i className="iconfont icon-kongxinyuan"></i></span>
            <span>满88元免邮费</span>
          </li>
        </ul>
        <div className="bgImg">
          <img src={bgPic} alt=""/>
        </div>
        <div className="addItems">
          <span>去添加点什么吧</span>
          <a href="javascript:;" onClick={this.goToLogin}>
          登录
          </a>
      </div>
  </div>
    )
  }
}

export default Cart;
