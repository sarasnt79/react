import React from 'react';
import ReactDOM from 'react-dom';
import Head1 from './Head1';
import Timer from './Timer';
import './style.css'


class App extends React.Component{

  constructor(){
    super();
    this.state = {
      title: "hello every body"
    }
  }


    render(){
  
      return (
        <div className='main'>
          <Head1 title ={this.state.title}/>
          <Timer/>
        </div>
      )
    }
  }


  export default App;
