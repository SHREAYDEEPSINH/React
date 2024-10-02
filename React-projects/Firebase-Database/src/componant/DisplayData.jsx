import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, remove, onChildRemoved } from "firebase/database";
import { app } from '../firebase';
import { useParams } from 'react-router-dom';

function DisplayData() {

    let [userData, setUserData] = useState([])

    const db = getDatabase(app);

    useEffect(() => {

        const starCountRef = ref(db, "post");
        onValue(starCountRef, (snapshot) => {
            const data = Object.values(snapshot.val());
            setUserData(data)
        })
    }, [db])


    function deleteHandler(id) {
        console.log(id);
        const deleteItem= ref(db, `post`+ id);

        // remove(deleteItem)
        console.log(deleteItem);
        
        
    }

    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {userData.map((ele, ind) => (
                    <tbody key={ind}>
                        <tr>
                            <td scope="row">{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>
                                <button className='btn btn-success me-2' onClick={() => deleteHandler(ind)}>Delete</button>
                                <button className='btn btn-success'>Edit</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </>
    )
}

export default DisplayData