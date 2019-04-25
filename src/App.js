import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {connect } from 'react-redux'
import {registerNav}from './modules/Navigation'
import {insertToken} from './redux/action/tokenAction'
import Signin from './pages/loginsignin/Signin'
import LoginContainer from './pages/loginsignin/LoginContainer'
import SigninContainer from './pages/loginsignin/SigninContainer'
import DashboardContainer from './pages/dashboard/DashboardContainer'
import ProductOverview from './pages/productOverview/ProductOverviewContainer'
import ShoppingBagContainer from './pages/shoppingBag/ShoppingBagContainer'
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.insertToken()
  }
  render() {
    return (
      <div>
        <Router ref={registerNav}>
          <Switch>
            <Route path="/signin" component={SigninContainer}/>
            {this.props.token&&[
            <Route key="dashboard" path="/dashboard" component={DashboardContainer}/>,
            <Route key="productOverview" path="/product-overview" component={ProductOverview}/>,
            <Route key="ShoppingBagContainer" path="/bag" component={ShoppingBagContainer}/>
            ]}
            <Route path="/login" component={LoginContainer}/>
            <Route exact path="/" component={LoginContainer}/>
            <Redirect to='/'/>
          </Switch>
        </Router>
      </div>
    );
  }
}
const mapStoreToProps=state=>({
  token:state.token.user_token
})
const mapDispatchToProps={
  insertToken
}
export default connect(mapStoreToProps,mapDispatchToProps)(App);