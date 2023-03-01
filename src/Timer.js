import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'

 var x =0;
var interval;
class Timer extends React.Component{


    constructor(){
      super();
      this.state={
        hour : 0 ,
        minute :0 ,
        second : 0 ,
        isStart :false 
      }
    }



StartBt =() =>{
if(this.state.isStart== false){
  this.setState({
    isStart :true
  })
      interval = setInterval(() =>{
        this.setState({
          second :this.state.second+1    //x:x--
        })
        if(this.state.second == 60 ){
          this.setState({
            second : 0 ,
          minute :this.state.minute+1    //x:x--
          })
        }

        if(this.state.minute == 60 ){
          this.setState({
            minute : 0 ,
            hour :this.state.hour+1    //x:x--
          })
        }
      }
      
      ,10
      )
    }
  }
    

    componentDidUpdate(){
      if(this.state.x == 0){
        clearInterval(interval)
      }
    }

    StopBt = () =>{
      this.setState({
        isStart :false
      })
      clearInterval(interval)
    }
    rstbtn = () =>{
     this.StopBt();
     this.setState({
      hour :0 ,
      minute : 0 ,
      second : 0
     })
    }
  
    render(){
      let h=this.state.hour 
      let m =this.state.minute
      let s=this.state.second

      return (
        <>
          <h2 className='timer'> 
          {`${ h >9 ? h : "0" +h}:${ m >9 ? m : "0" +m}:${ s >9 ? s : "0" +s}`}
        </h2>
        <div className='box'>     
           <button className='startbt btn' onClick={this.StartBt}>Start</button>
        <button className='stopbt btn' onClick={this.StopBt}>Stop</button>
        <button className='rst btn' onClick={this.rstbtn}>Reset</button>
        <button className='rst btn' onClick={this.props.handelSetIsLight} style ={{
          background : this.props.islight ?"black" : "white" ,
          color :this.props.islight ?"white"  : "black"
        }}>
          {this.props.islight ?"DARK"  : "LIGHT"}
        </button>
        </div>
  
        </>
      
      )
    }
  }

  
  export default Timer;