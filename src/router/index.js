import React, {PureComponent} from 'react'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from '../page/home/index'
import Release from '../page/release/index'

export default class MyRouter extends PureComponent{
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component= {Home}/>
          <Route path="/release" component= {Release}/>
          <Redirect exact from='/' to='/home'/>
          <Route component= {Home}/>
        </Switch>
    </BrowserRouter>
    )
  }
}