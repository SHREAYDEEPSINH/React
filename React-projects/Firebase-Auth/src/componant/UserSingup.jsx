import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);
function UserSingup() {
  let [data, setData] = useState({ email: "", password: "" });
  let navigate = useNavigate()

  const singupUser = () => {

    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(() => {
      alert("User Singup SuccessFfully");
      navigate('/')
    });
  };

  return (
    <>
      <div className="container bg-dark text-white p-5 w-50 mt-5 rounded-5">
        <h2>Singup</h2>
        <div className="col">
          <label htmlFor="">User Email</label>
          <br />
          <input
            className="form-control"
            type="email"
            required
            placeholder="enter Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="col my-3">
          <label htmlFor="">User Password</label>
          <br />
          <input
            className="form-control"
            type="password"
            required
            placeholder="enter Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="col">
          <button onClick={singupUser} className="btn btn-success">
            {" "}
            SingUp{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default UserSingup;
