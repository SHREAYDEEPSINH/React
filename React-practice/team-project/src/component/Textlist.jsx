import React, { useEffect, useState } from 'react'
import Display from './Display';

// let nextId = 0;

// function Textlist(
 
// ) {
//     const [task, setTask] = useState("");
//     const [items, setItems] = useState(()=>{
//         return JSON.parse(localStorage.getItem("tasks")) || []
//     });
    
//     const [editingId, setEditingId] = useState(null); 



//     useEffect(() => {
//         localStorage.setItem("tasks", JSON.stringify(items))
//     }, [items])


//     function handleTaskAdd() {
//         if (task) {
//             setItems([...items, { id: nextId++, task: task }]);
//             setTask(""); 
//           }else{
//         alert("Enter a task")
//           }
//     }

 

//     //   Delete 

//     function handleTaskDelete(id) {
//         console.log("delete");
//         setItems(items.filter((e) => e.id !== id));
//         console.log(id);
//     }

//     //   Edit 

//     function handleTaskEdit(id) {
//         const editedTask = items.find((item) => item.id === id);
//         setTask(editedTask.task); 
//         setEditingId(id); 
//     }

//     //   Update 

//     function handleTaskUpdate() {
//         setItems(
//             items.map((item) => {
//               if (task) {
//                 if (item.id === editingId) {
//                     return  { ...item, task: task }; 
//                 }
//               }else{
//                 alert("Enter a task")
//               }
//                 return item;
//             })
//         );
//         setTask("");
//         setEditingId(null); 
//     }
//     return (
//         <div>
            
//         <div className="container  text-white my-4 border border-3 rounded-4 border-dark shadow p-4">
//         <h1 className="text-center text-black mb-4">Todo List with Local Storage</h1>
    
//         <div className="row justify-content-center mb-4">
//             <div className="col-md-8 col-lg-6">
//                 <form
//                     onSubmit={(e) => {
//                         e.preventDefault();
//                     }}
//                     disabled={editingId !== null}
//                     className="input-group"
//                     >
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter a task"
//                         value={task}
//                         onChange={(e) => setTask(e.target.value)}
//                         />
//                     <button
//                         className="btn btn-danger text-white"
//                         onClick={editingId !== null ? handleTaskUpdate : handleTaskAdd}
//                         >
//                         {editingId !== null ? "Update Task" : "Add Task"}
//                     </button>
//                 </form>
//             </div>
//         </div>
    
//     </div>
    
//                         </div>
//     );
// }

// export default Textlist


let nextId = 0;
function Textlist() {

    let [task, setTask] = useState("");
    let [items, setItems] = useState(JSON.parse(localStorage.getItem("lsItems")) || []); // get items in localStorage
    let [editId, setEditId] = useState(null);


    // Store in LocalStorage
    useEffect(() => {
        localStorage.setItem("lsItems", JSON.stringify(items))
    }, [items])


    function addHandler() {
        if (task !== "") {
            setItems([...items, { id: nextId++, task: task }])
            setTask("")
        } else {
            alert("Enter value")
        }
    }

    let finalData = items.map((item) =>
        <li key={item.id} className='d-flex justify-content-between my-2'>
            {item.task}
            <span>
                <button className='btn btn-success' onClick={() => editHendler(item.id, item.task)}>Edit</button>
                <button className='btn btn-success ms-2' onClick={() => deleteHendler(item.id)}>Delete</button>
            </span>
        </li>
    )

    // // Delete task 
    // function deleteHendler(id) {
    //     setItems(items.filter((e) => e.id !== id))
    //     console.log("deleted");

    // }

    // Edit task 
    // function editHendler(id, t) {
    //     setTask(t)
    //     setEditId(id)
    // }

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
            <div className='border border-2 border-success w-100 m-auto p-2 rounded-3'>
                <h2 className='text-center py-2 text-success'>Todolist With LocalStorage</h2>
                <div className='d-flex justify-content-center p-4'>
                    <input type="text" className='py-2 px-3 me-2 fs-2 w-75 bg-transparent z border-success' value={task} onChange={e => setTask(e.target.value)} />
                    <button type='submit' className="btn btn-success px-3" onClick={(editId == null) ? (addHandler) : (updateHandler)}>
                        {(editId == null) ? "Add" : "Update"}
                    </button>
                </div>

                {/* <div>
                    <ul>
                        {finalData}
                    </ul>
                </div> */}
                {/* <Display one={finalData}/> */}
                {/* <Display one={finalData}/>  */}
            </div>
        </>
    )
}


export default Textlist
