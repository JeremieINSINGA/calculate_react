import { useState } from "react";
import "./App.css";

function App() {
   const [result,setResult] = useState('')
   const digits = [
     'ac','<-','1','2','3','4','5','6','7','8','9','0',
     '+','-','*','/','='
   ]
  return (
    <div className="App">
      <input className="main-screen" value={result}/>
      <div className="buttons">
        {
          digits.map((digit)=>{
           return <button key={digit}
           onClick={()=>{
             setResult(result+digit)
             if(digit === "="){
               setResult(eval(result))
             }
             else if(digit === 'ac'){
               setResult('')
             }
             else if(digit === '<-'){
               setResult(result.slice(0,result.length-1))
             }
           }}
           >{digit}</button>
          })
        }
      </div>
    </div>
  );
}

export default App;
