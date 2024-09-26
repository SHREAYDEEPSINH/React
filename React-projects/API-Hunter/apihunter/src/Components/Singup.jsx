import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Singup() {
    let [user, setUser] = useState({ name: "", email: "", password: "" });
    let [data, setData] = useState([])


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
        e.preventDefault();

        if (user.name != "" && user.email != "" && user.password != "") {
            let one = data.find((ele) => ele.email === user.email);

            if (!one) {
                axios
                    .post(`http://localhost:4040/user`, user)
                    .then((res) => {
                        navigate("/")
                    })
                    .catch((err) => console.log(err));
            } else {
                alert("user Already axist")
                setUser({ name: "", email: "", password: "" })

            }


        } else {
            alert("Please Fill Empty Details")
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-black" style={{ height: "100vh" }} >

            <div className="border border-1 border-danger rounded-2 w-25 m-auto my-5 p-5">
                <form onSubmit={loginSubmitHandler} className="text-white">
                    <h2>SingUp</h2>
                    <div className="mb-3">
                        <label className="form-label">name</label>
                        <input
                            type="text"
                            className="form-control border border-3 border-danger"
                            aria-describedby="emailHelp"
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control border border-3 border-danger"
                            aria-describedby="emailHelp"
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control border border-3 border-danger"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="btn btn-danger">
                        Singup
                    </button>
                    <div className="mt-2 ">
                        <Link to="/" className="text-white">Already Singup go login page</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Singup;
