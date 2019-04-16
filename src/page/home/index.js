import React, { PureComponent } from 'react';
import Detail from '../../components/home_detail.js'
import MyInfo from '../../components/home_info'
import Right from '../../components/right'
import './index.scss'

class Home extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      data:{}
    }
  }

  componentDidMount(){
    fetch('/home').then(res=>{
     return res.json()
    }).then(data=>{
      this.setState({
        data:data.data
      })
    })
}

  render() {
    const {state,props}=this
    return (
      <div className="page-home">
        <MyInfo histroy={props.history}/>
        <Detail data={state.data}/>
        <Right/>
      </div>
    );
  }
}

export default Home;
