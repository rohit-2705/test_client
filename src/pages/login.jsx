import React from 'react';
//import { useRef } from 'react';
import { Link } from 'react-router-dom';


export default function login() {
    
    /*const navigator = useNavigate();
    const usernameRef= useRef(null);
    const passwordRef = useRef(null);
  
    function handleLogin(e) {
      e.preventDefault();
  
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;
  
      if (username && password) {
        fetch("http://localhost:5000/api/signup/create", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.success) {
              try {
                if (result.token) {
                  sessionStorage.setItem("_tk", result.token);
                  setIsLoggedIn(true);
                  navigator("/home");
                } else {
                  throw new Error("Token missing!");
                }
              } catch (error) {
                console.log(error);
              }
            }
          })
          .catch((error) => console.log(error));
      } else {
        alert("username and Password is required to login");
      }
    }*/
  return (
     <div className="container min-vh-100 d-flex justify-content-center text-start align-items-center">
       <div className="card p-0"
           style={{
           width:"350px",
          }}
        >
        <div className="card-body">
        <div className="mb-3">
        <label htmlFor="username" className="form-label">
         enter username
        </label>
        <input
         type="username" 
         className="form-control" 
         id="username" 
         placeholder="username"/>
       
        </div>
        <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
         type="password" 
         className="form-control" 
         id="password" 
         placeholder="**********"/>
        
        </div>
        <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button"
        >
        login
        </button>
        </div>
        <div>
          <p className="text-center">
            Don't have an account?
            <span className="mx-2">
              <Link to="/signup">Sign up now</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
);
}


