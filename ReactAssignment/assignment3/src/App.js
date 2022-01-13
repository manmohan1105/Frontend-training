
import './App.css';
import React,{useState,useEffect} from 'react';
import data from './data.json'
import Home from './Home.js'
import { render } from '@testing-library/react';
function App() {

// console.log(data)
const[criteria,setcriteria]=useState('default');


const  onChangeValuedate = ()=> {
 setcriteria('date');
 console.log("hello date");
};
  
const onChangeValuename=()=>{
setcriteria('name');
console.log("hello name");
};
 
  return (
    <div className="App">
      hello from app component

      <div>
        <input type="radio" value="date" name="criteria" onChange={onChangeValuedate}/> date
        <input type="radio" value="name" name="criteria" onChange={onChangeValuename} /> name
        
      </div>
<Home data1={criteria}></Home>
     
 
    </div>
  );
}

export default App;
