import React,{useState,useEffect} from 'react';
import data from './data.json'
function Home(props) {
    if(props.data1=="name"){
        console.log(props.data1+"22")
        data.sort((a,b) => a.name.localeCompare(b.name));
        console.log(data)
    }
    if(props.data1=="date"){
        console.log(props.data1+"333")
        data.sort((a,b) => a.date.localeCompare(b.date));
        console.log(data)
    }
    console.log(props.data1+"111")
    
      return (
        <div >
          hello from home component
    
          <table>
        <tr>
          <th>UserId</th>
          <th>name</th>
          <th>DOB</th>
          
        </tr>

       
        {
           data && data.length>0 && data.map((item)=> <tr>
           <td>{item.userId}</td>
           <td>{item.name}</td>
           <td>{item.date}</td>
          
         </tr>)
         }
           
       
      
       
      </table>
     
        </div>
      );
    }
    
    export default Home;