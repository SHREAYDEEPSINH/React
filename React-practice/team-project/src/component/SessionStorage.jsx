// import React, { useEffect, useState } from 'react'


// let nextId = 0;

// function SessionStorage() {
//     const [task, setTask] = useState("");
//     const [items, setItems] = useState(() => {
//         return JSON.parse(sessionStorage.getItem("tasks")) || []
//     });


//     const [save, setsave] = useState(() => {
//         return JSON.parse(sessionStorage.getItem("save")) || []
//     });

//     const [editingId, setEditingId] = useState(null);



//     useEffect(() => {
//         sessionStorage.setItem("tasks", JSON.stringify(items))
//     }, [items])


//     useEffect(() => {
//         sessionStorage.setItem("save", JSON.stringify(save))
//     }, [save])

//     function handleTaskAdd() {
//         if (task) {
//             setItems([...items, { id: nextId++, task: task }]);
//             setTask("");
//         } else {
//             alert("Enter a task")
//         }
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
//                 if (task) {
//                     if (item.id === editingId) {
//                         return { ...item, task: task };
//                     }
//                 } else {
//                     alert("Enter a task")
//                 }
//                 return item;
//             })
//         );
//         setTask("");
//         setEditingId(null);
//     }


//     //   Save 

//     function handleSaveTask(listitem, id) {
//         console.log(listitem);
//         console.log(id);

//         const editedTask = items.find((ele) => ele.task === listitem.task); // Use find instead of filter
//         console.log(editedTask);

//         // if (editedTask) {
//         //     // Check if the task already exists in the save array
//         //     const isTaskSaved = save.some((savedItem) => savedItem.id === editedTask.id);

//         //     if (isTaskSaved) {
//         //         console.log("Task already saved");
//         //     } else {
//         //         setsave([...save, editedTask]);
//         //         console.log(save);
//         //     }
//         // }
//     }
// // var selectedrow={};
//     function Seteditobj(rowdata) {
//         // console.log(rowdata);
//         setsave(rowdata)
// // selectedrow=rowdata;
// // console.log("final: ",selectedrow);

//     }









//     return (
//         <>
//             <div className="container  my-4 border border-3 rounded-4 border-dark shadow p-4">
//                 <h1 className="text-center mb-4">Todo List with SessionStorage</h1>

//                 <div className="row justify-content-center mb-4">
//                     <div className="col-md-8 col-lg-6">
//                         <form
//                             onSubmit={(e) => {
//                                 e.preventDefault();
//                             }}
//                             disabled={editingId !== null}
//                             className="input-group"
//                         >
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Enter a task"
//                                 value={task}
//                                 onChange={(e) => setTask(e.target.value)}
//                             />
//                             <button
//                                 className="btn btn-danger text-white"
//                                 onClick={editingId !== null ? handleTaskUpdate : handleTaskAdd}
//                             >
//                                 {editingId !== null ? "Update Task" : "Add Task"}
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 <div className="row g-3">
//                     <div className="col-6">
//                         {items.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className=" bg-dark rounded-3 d-flex justify-content-between align-items-center p-3 shadow-sm mb-3"
//                             >
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
//                                     <label className="form-check-label" for="flexCheckIndeterminate">
//                                         <h2 className="mb-0 fs-5 text-capitalize text-white">{item.task}</h2>
//                                     </label>
//                                 </div>
//                                 <h2 className="text-white">{item.id}</h2>
//                                 <div>

//                                     <button
//                                         className="btn btn-danger btn-sm"
//                                         onClick={() => handleTaskDelete(item.id)}
//                                     >
//                                         Delete
//                                     </button>
//                                     {/* Model code  */}
//                                     {/* <!-- Button trigger modal --> */}
//                                     <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => Seteditobj(item)}>
//                                         Launch
//                                     </button>

//             {/* <!-- Modal --> */}
//             {/* {selectedrow?( */}

// <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div className="modal-dialog">
//         <div className="modal-content">
//             <div className="modal-header">
//                 <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">selectedrow
//                 <h2 className=" text-danger">{save.task}</h2>
//             </div>
//             <div className="modal-footer">
//                 <button type="button" data-bs-dismiss="modal"
//                     className="btn btn-success btn-sm me-2"
//                     onClick={() => handleTaskEdit(save, save.id)}
//                 >
//                     Edit
//                 </button>

//                 <button type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={() => handleSaveTask(save, save.id)}>Save changes</button>
//             </div>
//         </div>
//     </div>
// </div>
// {/* ): */}
// {/* ('' ) */}
// {/* } */}
// {/* Model code  */}







//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="col-6">
//                         {save.map((i) => (
//                 <div
//                 key={i.id}
//                 className="col-12 bg-dark  rounded-3 d-flex justify-content-between align-items-center p-3 shadow-sm"
//                 >
//                 <h2 className="mb-0 fs-5 text-capitalize">{i.task}</h2>
//                 <div>
//                 <button
//                 className="btn btn-danger btn-sm"
//                 onClick={() => handleTaskDelete(i.id)}
//                 >
//                 Delete
//                 </button>
//                 </div>
//                 </div>
//                 ))}
//                     </div>
//                 </div>
//             </div>












//         </>
//     );
// }

// export default SessionStorage



import React, { useEffect, useState } from 'react'

let nextId = 0;
function SessionStorage() {

    let [task, setTask] = useState("");
    let [items, setItems] = useState(JSON.parse(sessionStorage.getItem("lsItems")) || []); // get items in sessionStorage
    let [editId, setEditId] = useState(null);
    let [newId, setNewId] = useState(null);
    let [newItems, setNewItems] = useState(JSON.parse(sessionStorage.getItem("final")) || []);

    // Store in LocalStorage
    useEffect(() => {
        sessionStorage.setItem("lsItems", JSON.stringify(items))
    }, [items])

    useEffect(() => {
        sessionStorage.setItem("final", JSON.stringify(newItems))
    }, [newItems])


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
                {/* <button className='btn btn-success' onClick={() => editHendler(item.id, item.task)}>Edit</button>
                <button className='btn btn-success ms-2' onClick={() => deleteHendler(item.id)}>Delete</button> */}
                <div className="input-group-text">
                    {/* <input className="form-check-input mt-0" data-bs-toggle="modal" data-bs-target="#exampleModal" type="checkbox" value="" aria-label="Checkbox for following text input"/> */}



                    <button type="button" onClick={() => modalBox(item)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={() => completedTask()}>Mark as Completed</button>
                                    <button className='btn btn-success' data-bs-dismiss="modal" onClick={() => editHendler(item.id, item.task)}>Edit</button>
                                    <button className='btn btn-success ms-2' data-bs-dismiss="modal" onClick={() => deleteHendler(item.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </li>
    )

    let finalist = newItems.map((elem) => {
        <li key={elem.id} className='d-flex justify-content-between my-2'>
            {elem.task}
        </li>
    })

    function completedTask() {
        // newItems.map((elem) => {
        //     <li key={elem.id} className='d-flex justify-content-between my-2'>
        //         {elem.task}
        //     </li>
        // })


        setNewItems([...newItems, { newId }])
console.log(newItems);

    }   

    function modalBox(ele) {
        console.log("hii")
        console.log(ele)

        // setTask(t)
        // setEditId(ele)

        setNewId(ele)


    }

    // Delete task 
    function deleteHendler(id) {
        setItems(items.filter((e) => e.id !== newId.id))
        console.log("deleted");

    }

    // Edit task 
    function editHendler(id, t) {
        setEditId(id)
        setTask(newId.task)
        setNewId(newId.id)
    }

    // Update task
    function updateHandler() {
        if (task !== "") {
            let one = items.map((item) =>
                (item.id === newId) ? ({ ...item, task: task }) : (item)
            )
            setItems(one)
            setTask("")
            setEditId(null)
        } else {
            alert("Enter value")
        }
    }

    return (
        <>
            <div className='row justify-content-center border border-2 border-success w-100 m-auto p-2 rounded-3 py-5 my-5'>
                <div className='col-5'>
                    <h2 className='text-center py-2 text-success'>Todolist With SessionStorage</h2>
                    <div className='d-flex justify-content-center p-4'>
                        <input type="text" className='py-2 px-3 me-2 fs-2 w-75 bg-transparent border-success' value={task} onChange={e => setTask(e.target.value)} />
                        <button type='submit' className="btn btn-success px-3" onClick={(editId == null) ? (addHandler) : (updateHandler)}>
                            {(editId == null) ? "Add" : "Update"}
                        </button>
                    </div>

                    <div>
                        <ul>
                            {finalData}
                        </ul>
                    </div>

                </div>


                <div className='col-5 border border-2 border-black'>
                    <h2 className='text-center my-3'>Completed Task</h2>
                    <ul>
                        {/* {finalData} */}
                        {finalist}
                    </ul>
                </div>
            </div>
        </>
    )
}


export default SessionStorage