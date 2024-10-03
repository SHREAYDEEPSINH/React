import React, { useEffect, useState } from 'react'
import { getDatabase, onValue, push, ref, set } from 'firebase/database'
import { app } from '../firebase'
import { useNavigate, useParams } from 'react-router-dom';



function EditData() {

    let [data, setData] = useState({ name: "", email: "", password: "" });

    let { id } = useParams()
    // let [singupData, setsingupData] = useState(null)

    const db = getDatabase(app)
    let navigate = useNavigate()


    useEffect(() => {

        const starCountRef = ref(db, `post/${id}`);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();

            if (data) {
                setData({
                    name: data.name,
                    email: data.email,
                    password: data.password
                })
            } else {
                alert("data not found")
            }
        })
    }, [db])


    const updateData = async () => {
       const postListRef = ref(db, `post/${id}`);
        console.log(postListRef);

        set(postListRef,
            {
                name: data.name,
                email: data.email,
                password: data.password
            }
        ).then(() => {
            alert("data Added succesfullly")
            navigate("/display")
        })
    }


    return (
        <>
            <div className="container bg-dark text-white p-5 w-50 my-5">
                <form action="">
                    <div className="col">
                        <label htmlFor="">User Name</label>
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
                        <button onClick={updateData} className="btn btn-success">
                            {" "}
                            Update Data {" "}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditData