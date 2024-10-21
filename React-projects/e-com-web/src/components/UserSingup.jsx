import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { Link, useNavigate } from "react-router-dom";


function UserSingup() {
  const auth = getAuth(app);
  let [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate()


  const provider = new GoogleAuthProvider();


  const singupUser = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        alert("User Singup SuccessFfully")
        navigate("/usersingin")
      }
      ).catch((err) => alert(err))
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card bg-secondary text-white p-4 shadow-lg" style={{ width: '400px' }}>
          <h2 className="text-center mb-4">Create an Account</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">User Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                placeholder="Enter Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">User Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                placeholder="Enter Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <button onClick={singupUser} className="btn btn-success w-100">
              Sign Up
            </button>
            <div className="text-center mt-3">
              <span>Already have an account? </span>
              <Link to="/usersingin" className="text-light fw-bold">Sign In</Link>
            </div>
          </form>
        </div>
      </div>

    </>
  );
}

export default UserSingup;
