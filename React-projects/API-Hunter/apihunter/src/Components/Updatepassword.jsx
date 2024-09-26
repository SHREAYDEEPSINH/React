import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function Updatepassword() {


    let [user, setUser] = useState({ email: "", password: "" })

    let [data, setData] = useState([])

    let navigate=useNavigate()


    useEffect(() => {
        axios
            .get(`http://localhost:4040/user`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);


    
    function submitHandler(e) {
        e.preventDefault()
        let logInUser = data.find((ele) => ele.email === user.email);

        if (logInUser) {
            logInUser.password=user.password
            console.log(logInUser);
            
            axios
                .put(`http://localhost:4040/user/${logInUser.id}`,logInUser) 
                .then((res) => {
                    console.log(res);
                    navigate("/")
                })
                .catch((err) => console.log(err))

        } else {
            alert("Email not Found");
        }
    }



    return (
        <div className="d-flex justify-content-center align-items-center bg-black" style={{ height: "100vh" }} >
            <div className='w-25 m-auto my-5 border border-2 rounded-2 border-danger p-4 text-white'>
                <h2>Change Password</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">New Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="btn btn-danger">
                        Submit
                    </button>
                    <div className="mt-2 ">
                        <Link to="/" className="text-white">login page</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Updatepassword