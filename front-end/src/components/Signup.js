import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const BASE_URL=process.env.BASE_URL;
export default function Signup() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState(false);
    const [passErrorMsg,setPassErrorMsg]=useState('');
    const [userErrorMsg,setUserErrorMsg]=useState('');
    const navigate=useNavigate();
    useEffect(()=>{
      const auth=localStorage.getItem('user');
        if(auth){
            navigate('/products');
        }
    },[])
    const handleSignup=async()=>{

        if(!username && !password){
          setError(true);
          setPassErrorMsg('*enter a valid password of 8 characters');
          setUserErrorMsg('*enter a valid username');
          return;
        }
        if(!username){
          setError(true);
          setUserErrorMsg('*enter a valid username');
          return;
        }
        
        if(password.length < 8){
          setError(true);
          setPassErrorMsg('*enter a valid password of 8 characters')
          setPassword('');
          return;
        }
        
        let result=await fetch(`http://localhost:4500/signup`,{
            method:'post',
            body:JSON.stringify({username,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result=await result.json();
        console.log(result);
        if(result.username){
            alert('signup successful');
            setError(false);
            setUsername('');
            setPassword('');
            
        }
        else if(result.error === "Username already exist"){
          setError(true);
          setUserErrorMsg('*Username already exist');
          setUsername('');
        }
        else{
            alert('signup unsuccessful');
        }

    }
  return (
    <div className='signup'>
      <h1>Signup Page</h1>
      <input type="text" placeholder='enter your username'
      value={username} onChange={(e)=>{
        setUsername(e.target.value)
      }} />
      {error && !username && <span>{userErrorMsg}</span>}

      <input type="password" placeholder='enter your password' 
      value={password} onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
      {error && !password && <span>{passErrorMsg}</span>}


      <button onClick={handleSignup}>Submit</button>
    </div>
  )
}
