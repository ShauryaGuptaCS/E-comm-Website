import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import AlertBox from './AlertBox';
// const BASE_URL=process.env.BASE_URL;
console.log('REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
export default function Login() {

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState(false);
    const [passErrorMsg,setPassErrorMsg]=useState('');
    const [userErrorMsg,setUserErrorMsg]=useState('');
    const [errorMsg,setErrorMsg]=useState('');
    const [errorLogin,setErrorLogin]=useState(false);
    const [loginSuccess,setLoginSuccess]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/products');
        }
    },[])
    const handleClose=()=>{
      setLoginSuccess(false);
    }
    
    function temp(result){
      
    }
    const handleLogin=async()=>{

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
        
        let result =await fetch(`${process.env.REACT_APP_API_URL}/login`,{
            method:'post',
            body:JSON.stringify({username,password}),
            headers:{
                'Content-type':'application/json'
            }
        })
        result=await result.json();
        console.log(result);
        if(result.username){
            // alert('login successful');
            localStorage.setItem('user',JSON.stringify(result));
            setUsername('');
            setPassword('');
            
            setLoginSuccess(true);
            
            if(result.username === "admin"){
                  
              navigate('/AdminProducts');
            }
            else{
                navigate('/products');
            }
              
              
          }
        else{
            setErrorLogin(true);
            setError(false);
            setErrorMsg('Invalid username or password');
        }

    }
  return (
    <div className='authentication'>
      
      <h1>Login Page</h1>
      {errorLogin && <span>{errorMsg}</span>}
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


      <button className="auth-btn" onTouchStart={handleLogin}>Submit</button>
      {loginSuccess && <AlertBox message="Login successful" onClose={handleClose} />}
    </div>
  )
}
