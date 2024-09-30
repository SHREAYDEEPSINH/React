import React, { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../firebase'
import { v4 as uuidv4 } from 'uuid';



function RealtimeData() {

    let [data, setData] = useState({ name: "", email: "", password: "" });

    // let [singupData, setsingupData] = useState(null)

    const db = getDatabase(app)

    const singupUser = () => {
        set(ref(db, `user/${data.name}`),(
            {
                id: uuidv4(),
                name: data.name,
                email: data.email,
                password: data.password
            }
        )).then(() => console.log("data Added succesfullly"))
    }





    return (
        <>
            <div className="container bg-dark text-white p-5">
                <div className="col">
                    <label htmlFor="">User Name</label>
                    <br />
                    <input
                        type="text"
                        required
                        placeholder="enter Name"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                    />
                </div>
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
                        Send Data{" "}
                    </button>
                </div>
            </div>
        </>
    )
}

export default RealtimeData