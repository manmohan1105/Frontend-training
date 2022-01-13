import logo from './logo.svg';
import './App.css';
import Secondcomponent  from './secondcomponent';
import React, {useState} from 'react'
function App() {
  const [count,setCount]=useState(0);
  function helper (){
    if (count!==0){
      console.log(count)
      return 

    }
  }
  return (<>
    <div className="App">
      hello world
      <button onClick={()=>setCount(count+1)}>submit</button>
    
       { helper()}
       {count>0 && <Secondcomponent></Secondcomponent>}
       

    
        
    </div>
  </>);
}

export default App;
