import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  let [redirect, setRedirect] = useState(false)

  let navigate=useNavigate()

  function submitHandler(e) {
    e.preventDefault();

    axios
    .post(`http://localhost:4040/users` ,formData)
    .then((res) =>  console.log(res.data))
    setRedirect(true)
  }

  if(redirect){
    navigate("/")
  }


  return (
    <>
      <div className="container text-bg-success py-3 w-50">
        <form onSubmit={submitHandler}>
          <div className="my-3">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="my-3">
            <label htmlFor="email">email :</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <button className="btn btn-dark">Create</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Add;
