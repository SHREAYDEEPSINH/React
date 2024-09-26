import React from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../firebase'



function Hello() {
    const db = getDatabase(app)

    const sendData = () => {
        set(ref(db, "user/chetan"), {
            id: 1,
            name: "chetan",
            email: "chetan@gmail.com"
        }).then(() => console.log("data Added succesfullly"))

    }

    return (
        <>
            <div className='container my-3 p-5 text-bg-danger text-center'>
                <h1>Firebase</h1>
                <button className='btn btn-info' onClick={sendData}>Send Data</button>
            </div>
        </>
    )
}

export default Hello