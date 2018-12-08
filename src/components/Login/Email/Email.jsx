import React, {Component} from 'react';
import './Email.less'
class Email extends Component {
  handleClick = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <div className="login_content">
        <section className="login_message">
          <input type="tel"  placeholder="邮箱号"/>
        </section>
        <section className="login_verification">
          <input maxLength="15" placeholder="密码" />

          <div className="switch_button">
          <div className="switch_circle"></div>
          <span className="switch_text"></span>
  </div>
  </section>
    <span className="hint"></span>
    <button className="loginIn">登录</button>
    <button className="OtherLoginWay" onClick={this.handleClick}>其他登录方式</button>
  </div>
    )
  }
}

export default Email;
