import React, { useState } from 'react'
import { getDatabase, push, ref, set } from 'firebase/database'
import { app } from '../firebase'



function RealtimeData() {

    let [data, setData] = useState({ name: "", email: "", password: "" });

    // let [singupData, setsingupData] = useState(null)

    const db = getDatabase(app)


    const singupUser = () => {
        if (data.name != "" && data.email != "" && data.password != "") {
            const postListRef = ref(db, "post");
            const newPostRef = push(postListRef);
            set(newPostRef,
                {
                    name: data.name,
                    email: data.email,
                    password: data.password
                }
            ).then(() => alert("data Added succesfullly")).catch((err)=> alert(err))
        } else {
            alert("Fill Empty Details")
        }
    }

    return (
        <>
            <div className="container bg-dark text-white p-5 w-50 my-5" >
                <div className="col">
                    <h1>SendData To DataBase</h1>
                    <label htmlFor="">User Name</label>
                    <br />
                    <input
                        className='form-control'
                        type="text"
                        required
                        placeholder="enter Name"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                    />
                </div>
                <div className="col my-3">
                    <label htmlFor="">User Email</label>
                    <br />
                    <input
                        className='form-control'
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
                        className='form-control'
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
                        Send Data{" "}
                    </button>
                </div>
            </div>
        </>
    )
}

export default RealtimeData