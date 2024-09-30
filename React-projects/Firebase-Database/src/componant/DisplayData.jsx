import React from 'react'
import { getDatabase, ref, onValue } from "firebase/database";

function DisplayData() {

    const db = getDatabase();
    const starCountRef = ref(db);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        
    });
    return (
        <>
            <h1>display</h1>
        </>
    )
}

export default DisplayData