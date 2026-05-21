import "../css/Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";
import { useNavigate } from "react-router-dom";

export default function Register() {

    let [name,setName]=useState('');
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');
    const navigate=useNavigate();
    
    let {loading,error,signUp}=useSignUp();
     
    const regUser=async(e)=>{
        e.preventDefault();
        let user=await signUp(name,email,password);

        if(user){
            navigate('/login');
        }
    }

  return (
    <form className="reg-form" onSubmit={regUser}>
        <div className="regform-container" >
           {error && <p className="error">{error}</p>}
            <h2>Create your Account</h2>
            <p>Join thousands of professionals discovering new career opportunities every day.</p>

            <div className="regform-control">
                <label>UserName</label>
                <input type='text' placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)} value={name}/>

                <label>Email</label>
                <input type='email' placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>

                <label>Password</label>
                <input type='password' placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>

                <div className="form-action">
                    <Link to='/login'>Already have an account?</Link>
                </div>

                <div className="reg-btn">
                    <button type="submit" disabled={loading}>
                      {loading ? <span className="spinner"></span> : "Register"}
                    </button>
                </div>
            </div>
        </div>
    </form>
  )
}
