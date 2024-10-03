import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, remove, onChildRemoved } from "firebase/database";
import { app } from '../firebase';
import { Link } from 'react-router-dom';

function DisplayData() {

    let [userData, setUserData] = useState([]);
    let [key, setKey] = useState([])

    const db = getDatabase(app);

    useEffect(() => {

        const starCountRef = ref(db, "post");
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();

            if (data) {
                setUserData(Object.values(data));
                const key = (Object.keys(snapshot.val()));
                setKey(key)
            } else {
                setUserData([]);
                setKey([]);
            }
        })
    }, [db])

    function deleteHandler(ind) {
        const deleteItem = ref(db, `post/${key[ind]}`)
        remove(deleteItem)
    }

    return (
        <>

            <table className="table table-dark text-center w-75 m-auto my-4">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {(userData != "") ? (
                    userData.map((ele, ind) => (
                        <tbody key={ind}>
                            <tr>
                                <td scope="row">{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>
                                    <Link to={`/edit/${key[ind]}`} className='text-white text-decoration-none'><button className='btn btn-outline-success me-2 '>Edit</button></Link>
                                    <button className='btn btn-success me-2' onClick={() => deleteHandler(ind)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    ))
                ) : (
                    <td colSpan={3}>
                        <div className='text-bg-dark p-5 text-center w-100'>
                            <h1>No Data Added First Add Data</h1>
                        </div>
                    </td>
                )}
            </table>

        </>
    )
}

export default DisplayData