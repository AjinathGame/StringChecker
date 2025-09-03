import React, { use, useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [Leftstr , setLeftStr] = useState("");
  const [Rightstr , setRightStr] = useState("");
  const [message, setMessage] = useState("");


  const checkstr = ()=>{
    if(Leftstr === Rightstr){
      setMessage("Strings are Same");
    }else{
      setMessage("Strings are Not Same");
    }
  }

  useEffect(()=>{
    checkstr();
  }, [Leftstr, Rightstr])


  return (
    <>
        <h1>String Checker</h1>
        <div>
          <textarea onChange={(e)=>setLeftStr(e.target.value)} value={Leftstr}/>
          <textarea onChange={(e)=>setRightStr(e.target.value)} value={Rightstr}/>
        </div>
        <div>
          <p>{message}</p>
        </div>

    </>


  )
}

export default App
