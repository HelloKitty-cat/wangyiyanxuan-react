import React, {Component} from 'react';
import './Personal.less'
import BScroll from 'better-scroll'
class Personal extends Component {
  componentDidMount () {
    new BScroll('.PersonWrap',{
      click: true,
    })
  }
  render() {
    return (
      <div className="PersonWrap">
        <div className="personMove">
          <header className="personHeader">
            <div className="headerWrap">
              <img src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="" />
                <div className="content">
                  <p className="userInfo">18756495513</p>
                  <p className="users">普通用户</p>
                </div>
            </div>
          </header>
          <div className="itemContent">
            <ul className="items">
              <li>
                <a href="javascript:;">
                  <span><i className="iconfont icon-dingdan"></i></span>
                  <span className="itemBotton">我的订单</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><i className="iconfont icon-rili"></i></span>
                  <span className="itemBotton">周六一起拼</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><i className="iconfont icon-shouhou"></i></span>
                  <span className="itemBotton">售后服务</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><i className="iconfont icon-fanli"></i></span>
                  <span className="itemBotton">邀请返利</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><i className="iconfont icon-youhuiquan"></i></span>
                  <span className="itemBotton">优惠券</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><i className="iconfont icon-hongbao"></i></span>
                  <span className="itemBotton">我的红包</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><i className="iconfont icon-youxiangou-copy"></i></span>
                  <span className="itemBotton">优先购</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><i className="iconfont icon-gift-card"></i></span>
                  <span className="itemBotton">礼品卡</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><i className="iconfont icon-jifenzhongxin"></i></span>
                  <span className="itemBotton">积分中心</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><i className="iconfont icon-huiyuanjulebudengjixunzhang"></i></span>
                  <span className="itemBotton">会员俱乐部</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><i className="iconfont icon-dizhi"></i></span>
                  <span className="itemBotton">地址管理</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><i className="iconfont icon-zhanghaoanquan"></i></span>
                  <span className="itemBotton">账号安全</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><i className="iconfont icon-kefu"></i></span>
                  <span className="itemBotton">客服与帮助</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span><i className="iconfont icon-yijianfankui"></i></span>
                  <span className="itemBotton">意见反馈</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="loginOut">
          退出登录
        </div>
      </div>
  </div>
    )
  }
}

export default Personal;
