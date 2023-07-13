import React, { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";


function Home() {
  const[name,setName]=useState("");
  const[name1,setName1]=useState("");
  const nav=useNavigate();
  useEffect(()=>
  {
    if(name===name1)
    {
      console.log("crt")
      
    }
    else{
      console.log("wrng")
    }
  },[name,name1]
  )
  return (
    <>
    password: <input type="password" value={name} onChange={(e)=>setName(e.target.value)}/>
    password: <input type="password" value={name1} onChange={(e)=>setName1(e.target.value)}/>
    <button onClick={
        (e)=>{
            nav("/College")
            }
}>
        submit</button>
   </>
  )
}

export default Home;

