import React from 'react';
//import { useRef } from 'react';
import { Link,} from 'react-router-dom';
export default function signup() {
    
    
  return (
    <div className="container min-vh-100 d-flex justify-content-center text-start align-items-center">
      <div className="card p-0"
           style={{
           width:"350px",
          }}
        >
        <div className="card-body">
        <div className="mb-3">
        <label htmlFor="name" className="form-label">
          User name
        </label>
        <input
         type="text" 
         className="form-control" 
         id="name" 
         placeholder="Eg: Joe Root"/>
        </div>
        <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
         type="email" 
         className="form-control" 
         id="email" 
         placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
        <label htmlFor="phonenumber" className="form-label">
          Phone number
        </label>
        <input
         type="phonenumber" 
         className="form-control" 
         id="email" 
         placeholder="Eg: +919875623415"/>
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
        <button className="btn btn-primary" type="button">
          signup
        </button>
        </div>
        <div>
          <p className="text-center">
            Already have an account?
            <span className="mx-2">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
