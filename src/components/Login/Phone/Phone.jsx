import React, {Component} from 'react';
import './Phone.less'
class Phone extends Component {

  state = {
    count: 0
  }

  handleClick = () =>{
    this.props.history.goBack()
  }

  CountDown = () =>{
    const value =this.input.value.trim()
    if (!value){
      return
    }
    let count = 30;
    this.setState({
      count
    })
    this.timer = setInterval(() =>{
      count--;
      if (count <=0){
        clearInterval(this.timer)
        this.setState({
          count
        })
      }
      this.setState({
        count
      })
    },1000)
  };

  render() {
    return (
      <div className="login_content">
        <section className="login_message">
          <input type="tel" maxLength="11" placeholder="手机号" ref={input => this.input = input}/>
          <button onClick={this.CountDown} disabled={this.state.count} className={this.state.count ? 'get_verification on' : 'get_verification'}>{this.state.count ? `还有${this.state.count}秒` : '获取验证码'}</button>
        </section>
        <section className="login_verification">
          <input type="tel" maxLength="8" placeholder="验证码" />
        </section>
        <span className="hint"></span>
        <section className="login_hint">
          温馨提示：未注册网易严选帐号的手机号，登录时将自动注册，且代表已同意
          <a href="javascript:;">《用户服务协议》</a>
        </section>

        <button className="loginIn">登录</button>
        <button onClick={this.handleClick} className="OtherLoginWay">其他登录方式</button>
  </div>
    )
  }
}

export default Phone;
