// import React, { useEffect, useState } from 'react'

// function Users() {

//     const [user, setUser] = useState([]);
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         async function fetchApi() {

//             let url = await fetch(`https://jsonplaceholder.typicode.com/users`)
//             let data = await url.json()
//             setUser(data)

//         }
//         fetchApi()
//     }, [])

//     // let rendar=user.map((ele)=>(
//     //     <li key={ele.id}>
//     //         {ele.name}
//     //     </li>
//     // ))

//     let finalData = user.filter(({ name }) => {
//         // console.log(name.indexOf(data));
//         return name.indexOf(data) >= 0;
//     }).map((ele) => (
//         <li key={ele.id}>
//             {ele.name}
//         </li>
//     ))


//     return (
//         <>
//             <div className='container'>
//                 <div className='text-center'>
//                     <input type="text" className='py-3 px-5' value={data} onChange={(e) => setData(e.target.value)} />
//                     {finalData}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Users



import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Users() {

    let [user, setUser] = useState([]);
    let [data, setData] = useState([]);

    useEffect(() => {
        let fetchData = async () => {
            let url = await fetch(`https://jsonplaceholder.typicode.com/users`)
            let data = await url.json()
            setUser(data);
        }
        fetchData()
    }, [])
    
    // console.log(user)

    // let rendar = user.map((ele) => (
    //     <li key={ele.id}>
    //         {ele.name}
    //     </li>
    // ))

    let finalData = user.filter(({ name }) => {
        return name.indexOf(data) >= 0;
    }).map((ele)=>(
        <li key={ele.id}>
            {ele.name}
        </li>
    ))

    return (
        <div>
            <div>
                <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
                {finalData}
            </div>
        </div>
    )
}

export default Users