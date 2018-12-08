import React, {Component} from 'react';
import './Search.less'
class Search extends Component {

  cancel = () =>{
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <div className="Search">
          <header className="header">
            <input type="search" placeholder="严选双12 热销TOP100" />
              <span><i className="iconfont icon-sousuo"></i></span>
              <span onClick={this.cancel} className="cancel">取消</span>
          </header>
        </div>
        <div className="m-searchSuggestionsViews">
          <div className="m-searchSuggestions">
            <h3>热门搜索</h3>
            <div className="navs">
              <a href="javascript:;">按摩仪</a>
              <a href="javascript:;" className="active">电器低至5折</a>
              <a href="javascript:;" className="active">全场8折满减券</a>
              <a href="javascript:;">秋冬围巾</a>
              <a href="javascript:;">羽绒服6折起</a>
              <a href="javascript:;">每满200减100</a>
              <a href="javascript:;">明星商品低至6折</a>
              <a href="javascript:;" className="active">特价1折起</a>
              <a href="javascript:;">女鞋</a>
              <a href="javascript:;">厨电锅具89元起</a><br/>
              <a href="javascript:;" className="active">海外制造甄选</a>
              <a href="javascript:;">美妆个护7折起</a>
              <a href="javascript:;" className="active">行李箱</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
