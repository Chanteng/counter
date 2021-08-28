import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  const [number, setNumber] = useState(0)
  // const [num, setNum] = useState(0)

  function AddOne(){
   setNumber (number + 1)
  }

  function SubOne() {
    setNumber ( number - 1)
  }

 return (
   <div>
     <h1>{number}</h1>
     <button onClick={() => AddOne()}>Add 1</button>
     <button onClick={() => SubOne()}>Sub 1</button>
   </div>
 )
}


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { number: 0};
//   }

//   AddOne() {
//     this.setState({
//       number: this.state.number + 1 
//     })
//   }

//   SubtractOne() {
//     this.setState({
//       number: this.state.number - 1 
//     })
//   }

 
//   render() {
//     return (
//       <div>
//         <h1>{this.state.number}</h1>
//         <button onClick={() => this.AddOne()}>Add 1</button>
//         <button onClick={() => this.SubtractOne()}>Sub 1</button>
       
//       </div>
//     );
//   }
// }




export default App;
