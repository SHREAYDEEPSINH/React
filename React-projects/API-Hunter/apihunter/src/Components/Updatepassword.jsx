import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Updatepassword() {

    let { id } = useParams()
    let [user, setUser] = useState({ id: "", email: "", password: "" })

    let [data,setdata] =useState([])


    useEffect(() => {
        axios
            .get(`http://localhost:4040/user`)
            .then((res) => {
                setdata(res.data);
            })
            .catch((err) => console.log(err));
    }, []);


    let one = data.find((ele) => ele.email === user.email);

    if(one){
        
    }


    return (
        <div className='w-25 m-auto my-5 border border-2 p-4'>
            <form >
                <div className="mb-3">
                    <label className="form-label">email</label>
                    <input
                        type="password"
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
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Updatepassword