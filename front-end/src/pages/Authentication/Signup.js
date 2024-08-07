import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AlertBox from '../../components/AlertBox';


export default function Signup() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState(false);
    const [passErrorMsg,setPassErrorMsg]=useState('');
    const [userErrorMsg,setUserErrorMsg]=useState('');
    const [signupSuccess,setSignupSuccess]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
      const auth=localStorage.getItem('user');
        if(auth){
            navigate('/products');
        }
        
    })
    const handleOnClose=()=>{
      setSignupSuccess(false);
    }
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
        
        let result=await fetch(`${process.env.REACT_APP_API_URL}/signup`,{
            method:'post',
            body:JSON.stringify({username,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result=await result.json();
        console.log(result);
        if(result.username){
            // alert('signup successful');
            setSignupSuccess(true);
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
            // alert('signup unsuccessful');
            setSignupSuccess(true);
        }

    }
  return (
    <div className='authentication'>
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


      <button className="auth-btn" onClick={handleSignup}>Submit</button>
    
      {signupSuccess && <AlertBox message="Signup Successful" onClose={handleOnClose} />}
    </div>
  )
}
