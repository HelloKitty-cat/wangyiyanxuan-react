import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import { HashRouter, Switch , Route} from 'react-router-dom'
import Search from './components/Search/Search'
import Personal from './components/Personal/Personal'
import Main from './components/Main/Main'
import './mock/mockServer'
ReactDom.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/search' component={Search}/>
        <Route path='/personal' component={Personal}/>
        <Route component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'))
