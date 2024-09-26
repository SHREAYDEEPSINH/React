import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    let [data, setData] = useState([]);

    let [user, setUser] = useState({ email: "", password: "" });

    let navigate = useNavigate()
    useEffect(() => {
        axios
            .get(`http://localhost:4040/user`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);


    function loginSubmitHandler(e) {
        e.preventDefault()
        
        
        let logInUser = data.find((ele) => ele.email === user.email);
        console.log(logInUser.name);
        

        if (user.email !== "" && user.password !== "") {

            if (logInUser) {
                if (logInUser.password == user.password) {
                    localStorage.setItem("lsItems", JSON.stringify(logInUser))
                    navigate("/home")
                    
                } else {
                    alert("password Wrong");
                    setUser({ email: "", password: "" })
                }

            } else {
                console.log("no")
                alert("wrong data")
            }
        } else {
            alert("Please Fill Empty Details")
        }

    }


    return (
        <div className="d-flex justify-content-center align-items-center bg-black" style={{ height: "100vh" }} >
            <div className="border border-2 border-success rounded-2 w-25 m-auto my-5 p-5 "  >
                <form onSubmit={loginSubmitHandler} className="text-white">
                    <h2 className="mb-3">Login</h2>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control border border-3 border-success"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control border border-3 border-success"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Login
                    </button>
                    <div className="mt-2">
                        <Link to={`/update/${user.id}`} className="text-white">Forgot Password</Link>
                    </div>
                    <div className="mt-2 ">
                        <Link to="/singup" className="text-white">Not Singup go Singup First</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
