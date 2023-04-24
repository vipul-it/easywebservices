import React, { useState } from "react";

import { useNavigate } from 'react-router-dom'
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(
      localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const users = [{ username: "rajesh", password: "12345" }];
    const handleSubmit = (e) => {
      e.preventDefault();
      const account = users.find((user) => user.username === username);
      if (account && account.password === password) {
        localStorage.setItem("authenticated", true);
        navigate("/");
      }
    };
 
  return (
    <div className="log">
      <div className="log1">
        <div className="log1_left">
          <img src="/Images/info-image.png" alt="wel" />
          <h1>Messaging solutions to scale your business</h1>
          <p>SMS Solution with end-to-end encryption. DLT Friendly. Realtime analytics. Multiple API compatibility. Intelligent operator routing. Auto-scaling system.</p>
        </div>
        <div className="log1_right">
            <h1>Sign In</h1>
            <div>
		<form action="" onSubmit={handleSubmit}> 
			<div className="log1_right1"> 
				<label htmlFor="name">Username</label><br/>
				<input type="text"
        name="Username"
        value={username}
        onChange={(e) => setusername(e.target.value)}/> 
			</div> 
			<div  className="log1_right1"> 
				<label htmlFor="passw">Password</label><br/>
			<input type="password"
        name="Password"
        onChange={(e) => setpassword(e.target.value)}/> 
      <p>Forgot Password ?</p>
			</div> 
      <h6><span><input type="checkbox" /></span> I accept the Terms and Conditions </h6> 
			<button type="submit">Sign In</button>
		</form>
	</div>
        </div>
      </div>
    <p style={{marginLeft:"270px",marginTop:"20px"}}>© 2021-2023 Powered by OTPL</p>
    </div>
  );
};

export default Login;
