import React, { PureComponent } from 'react'
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/github.css';
import './index.scss'


class Detail extends PureComponent{
 
  render(){
    hljs.initHighlightingOnLoad();
    const {props}=this
    console.log(props)
    return (
      <div className="home-detail">
        <div dangerouslySetInnerHTML={{__html: props.data}}></div>
      </div>
    )
  }
}


export default Detail 