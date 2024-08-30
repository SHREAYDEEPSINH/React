// import React, { useState } from 'react'

// function Display() {
//     const [items, setItems] = useState(()=>{
//         return JSON.parse(localStorage.getItem("tasks")) || []
//     });


//   return (
//     <>
//       <div className="row g-3">
//             {items.map((item) => (
//                 <div
//                     key={item.id}
//                     className="col-12 bg-dark text-white  rounded-3 d-flex justify-content-between align-items-center p-3 shadow-sm"
//                 >
//                     <h2 className="mb-0 fs-5 text-capitalize">{item.task}</h2>
//                     <div>
//                         <button
//                             className="btn btn-success btn-sm me-2"
//                             onClick={() => handleTaskEdit(item.id)}
//                         >
//                             Edit
//                         </button>
//                         <button
//                             className="btn btn-danger btn-sm"
//                             onClick={() => handleTaskDelete(item.id)}
//                         >
//                             Delete
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </>
//   )
// }

// export default Display



import React, { useEffect, useState } from 'react'

let nextId = 0;
function Display() {
    let [task, setTask] = useState("");
    let [items, setItems] = useState(JSON.parse(localStorage.getItem("lsItems")) || []); 
    let [editId, setEditId] = useState(null);

    let finalData = items.map((item) =>
        <li key={item.id} className='d-flex justify-content-between my-2'>
            {item.task}
            <span>
                <button className='btn btn-success' onClick={() => editHendler(item.id, item.task)}>Edit</button>
                <button className='btn btn-success ms-2' onClick={() => deleteHendler(item.id)}>Delete</button>
            </span>
        </li>
    )


    useEffect(() => {
        localStorage.setItem("lsItems", JSON.stringify(items))
    }, [items])

     // Delete task 
     function deleteHendler(id) {
        setItems(items.filter((e) => e.id !== id))
        console.log("deleted");

    }

    // Edit task 
    function editHendler(id, t) {
        // setTask(t)
        // setEditId(id)
        
        
    }

    // Update task
    // function updateHandler() {
    //     if (task !== "") {
    //         let one = items.map((item) =>
    //             (item.id === editId) ? ({ ...item, task: task }) : (item)
    //         )
    //         setItems(one)
    //         setTask("")
    //         setEditId(null)
    //     } else {
    //         alert("Enter value")
    //     }
    // }
    return (
        <>
            <div>
                <ul>
                    {finalData}
                </ul>
            </div>
        </>
    )
}

export default Display