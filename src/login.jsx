import axios from "axios";
import React,{useState} from "react";
const Login = ()=>{
  const [email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(email && password){
        const payload = {
            email,
            password,
        };
        axios
        .post("https://reqres.in/api/login",payload)
        .then((r)=>{
            console.log(r.data);
        })
        }
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>Useremail</label>
                    <input
                    type = "email"
                    value = {email}
                    onChange = {(e)=>setEmail(e.target.value)}
                    />

                </div>
                <div>
                <label>Userpassword</label>
                    <input
                    type = "password"
                    value = {password}
                    onChange = {(e)=>setPassword(e.target.value)}
                    />

                </div>
               
            </form>
        </div>
    )
  }
  export default Login;