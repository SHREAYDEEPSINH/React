import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {


    let { id } = useParams()

    let [data, setData] = useState({ id: "", name: "", email: "" })

    let navigate = useNavigate()


    useEffect(() => {
        axios
            .get(`http://localhost:4040/users/${id}`)
            .then((res) => {
                setData({
                    id: res.data.id,
                    name: res.data.name || "",
                    email: res.data.email || "",
                })
            })
            .catch((err) => console.log("Bad request"));
    }, [id]);


    function submitHandler(e) {
        e.preventDefault()
        
        axios
            .put(`http://localhost:4040/users/${id}` ,data)
            .then((res) => {
                console.log(res.data);
                
                navigate("/")
            })
            .catch((err) => console.log(err))
    }


    return (
        <>
            <div className="container text-bg-success py-3 w-50">
                <form onSubmit={submitHandler}>
                    <div className="my-3">
                        <label htmlFor="name">Id :</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Id"
                            value={data.id}
                            disabled

                        />
                    </div>

                    <div className="my-3">
                        <label htmlFor="name">Name :</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={data.name}
                            onChange={(e) =>
                                setData({ ...data, name: e.target.value })
                            }
                        />
                    </div>

                    <div className="my-3">
                        <label htmlFor="email">email :</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                            }
                        />
                    </div>

                    <div>
                        <button className="btn btn-dark">Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Update