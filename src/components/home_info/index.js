import React, { PureComponent } from 'react'
import {Link,Router} from 'react-router-dom'
import './index.scss'
import head from '../../assets/img/head.jpg'
import code from '../../assets/img/code.png'

const content={
  name:'东法兰克',
  age:55
}
class MyInfo extends PureComponent{
  constructor(props){
    super(props);
    this.state={
      testAuto:false
    }
  }

  save=()=>{
    fetch('/saveArticle',{
      method: 'POST',
      body: JSON.stringify(content),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res=>{
      return res.json()
     }).then(res=>{
       
     })
  }

  write=()=>{
    this.setState({
      testAuto:true
    })
    document.getElementsByTagName('body')[0].style.overflow="hidden"
    // document.getElementsByTagName('body')[0].style.overflow="auto"
  }

  login=()=>{
    const value=this.input.value;
    console.log(this.props.histroy);
    this.props.histroy.push('/release')
  }
  render(){
    return (
      <div className="home-myInfo">
        <div className="myInfo-head">
          <img src={head} alt=""/>
        </div>
        <div className="myInfo-name">顾彦君</div>
        <div className="myInfo-link">
          <Link className="point" to="/">关于我</Link>
          <span className="split">|</span>
          <span className="point" onClick={this.write}>写文章</span>
        </div>
        <div className="myInfo-code">
          <img src={code} alt=""/>
          <span>加我微信</span>
        </div>
        {
          this.state.testAuto && 
          <div className="myInfo-loginBox">
              <div className="myInfo-login">
                <span>通行证:</span>
                <input ref={input => this.input = input} />
                <div><span onClick={this.login}>确定</span></div>
              </div>
          </div>  
        }
      </div>
    )
  }
}


export default MyInfo 