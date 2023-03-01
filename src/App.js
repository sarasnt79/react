import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import Head1 from './Head1';
import Timer from './Timer';
import './style.css'


// class App extends React.Component{

//   constructor(){
//     super();
//     this.state = {
//       title: "hello every body"
//     }
//   }


//     render(){
  
//       return (
//         <div className='main'>
//           <Head1 title ={this.state.title}/>
//           <Timer/>
//         </div>
//       )
//     }
//   }

// export default App

const App = () =>{
  const [title , setTitle] = useState("hello every body");

  const[islight , setIsLight]=useState(false)
   
  const handelSetIsLight=()=>{
    setIsLight(!islight)
  }


  return (
            <div className='main' style={{background : islight ? "white" : "black"}}>
              <Head1 title ={title}/>
              <Timer islight ={islight} handelSetIsLight ={handelSetIsLight} />
            </div>
          )
}
 export default App;
