import React, {Component} from 'react';
import './Login.less'
import Phone from './Phone/Phone'
import Email from './Email/Email'
import {Switch,Route,NavLink} from 'react-router-dom'
import bgPic from '../../assets/images/logo.png'
class Login extends Component {

  goToHome = () =>{
    this.props.history.replace('/home')
  }
  goToSearch = () => {
    this.props.history.push('/search')
  }
  goToCart = () => {
    this.props.history.replace('/cart')
  }

  render() {
    return (
      <div>
        <header className="topicHeader">
          <div className="topicContent">
            <span onClick={this.goToHome}><i className="iconfont icon-shouye"></i></span>
            <span className="title"></span>
            <span onClick={this.goToSearch}><i className="iconfont icon-sousuo"></i></span>
            <span onClick={this.goToCart}><i className="iconfont icon-gouwuche"></i></span>
          </div>
        </header>

    <div className="Logocontent">
      <div className="logoWrap">
        <img src={bgPic} alt="1" />
      </div>
      <Switch>
        <Route path='/login/phone' component={Phone}></Route>
        <Route path='/login/email' component={Email}></Route>
      </Switch>
      {
        this.props.location.pathname === '/login' ? (  <div className="btns">
          <NavLink to='/login/phone'>
            <span><i className="iconfont icon-shouji"></i></span>
            <span>手机号码登录</span>
          </NavLink>
          <NavLink to='/login/email'>
            <span><i className="iconfont icon-youxiang"></i></span>
            <span>邮箱账号登录</span>
          </NavLink>
        </div>) : ''
      }


  </div>
    <div className="thirdWrap">
      <div className="ThirditemWrap">
        <span><i className="iconfont icon-QQ"></i></span>
        <span>QQ</span>
      </div>
      <div className="ThirditemWrap">
        <span><i className="iconfont icon-WeChat"></i></span>
        <span>微信</span>
      </div>
      <div className="ThirditemWrap">
        <span><i className="iconfont icon-weibo"></i></span>
        <span>微博</span>
      </div>
    </div>

  </div>
    )
  }
}

export default Login;
