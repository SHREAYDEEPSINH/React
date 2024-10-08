import React, { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../firebase'
import { v4 as uuidv4 } from 'uuid';



function Hello() {

    let [data, setData] = useState({ name: "", email: "", password: "" });

    let [singupData, setsingupData] = useState(null)

    const db = getDatabase(app)

    const singupUser = () => {
        set(ref(db, `user/${data.name}`), setsingupData(
            {
                id: uuidv4(),
                name: data.name,
                email: data.email,
                password: data.password
            }
        )).then(() => console.log("data Added succesfullly"))
    }

    console.log(singupData);




    return (
        <>
            {/* <div className='container my-3 p-5 text-bg-danger text-center'>
                <h1>Firebase</h1>
                <button className='btn btn-info' onClick={sendData}>Send Data</button>
            </div> */}.
            <div className="container bg-dark text-white p-5">
                <h2>singup</h2>
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
                        Sing Up{" "}
                    </button>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Hello