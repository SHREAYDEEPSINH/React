import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

function UserSingup() {
  let [data, setData] = useState({ email: "", password: "" });

  const singupUser = () => {

    createUserWithEmailAndPassword(auth, data.email, data.password).then(() =>
      alert("User Singup SuccessFfully")
    );
  };

  return (
    <>
      <div className="container bg-dark text-white p-5">
        <div className="col">
          <label htmlFor="">User Email</label>
          <br />
          <input
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
            Sing Up{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default UserSingup;
