import React, {Component} from 'react';
import Home from '../../containers/home'
import Items from '../../containers/items'
import Topic from '../../containers/topic'
import Cart from '../../components/Cart/Cart'
import MainFooter from './MainFooter/MainFooter'
import Login from '../../components/Login/Login'
import { Switch,Route,Redirect} from 'react-router-dom'
class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/items' component={Items}></Route>
          <Route path='/topic' component={Topic}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route path='/login' component={Login}></Route>
          <Redirect to='/home'/>
        </Switch>
        {
          this.props.location.pathname === '/login' || this.props.location.pathname === '/login/email' ||  this.props.location.pathname === '/login/phone' ?  '' :   <MainFooter />
        }

      </div>
    )
  }
}

export default Main;
