// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { add, deleteHandler, editHandler } from '../features/todolist/todoSlice';

// let nextId = 1;
// function Todolist() {
//     const addlist = useSelector((state) => state.todolist.value)
//     const dispatch = useDispatch()

//     let [task, setTask] = useState("");
//     let [editId, setEditId] = useState(null);


//     function addHandler() {
//         if (task !== "") {
//             const newlist = { id: nextId++, task }
//             dispatch(add(newlist))
//             setTask("")
//         } else {
//             alert("Enter value")
//         }
//     }

//     function handelEdit(id) {
//         let editItem = addlist.find((ele) => ele.id === id);
//         setTask(editItem.task)
//         setEditId(id)
//     }


//     function updateHandler() {
//         if (task) {
//             let updateItem = { id: editId, task }
//             dispatch(editHandler(updateItem));
//             setTask("");
//             setEditId(null);
//         } else {
//             alert("Enter Data First")
//         }
//     }

//     let finalData = addlist.map((item) =>
//         <li key={item.id} className='d-flex justify-content-between my-2'>
//             {item.task}
//             <span>
//                 <button className='btn btn-dark' onClick={() => handelEdit(item.id)}>Edit</button>
//                 <button className='btn btn-dark ms-2' onClick={() => dispatch(deleteHandler(item.id))}>Delete</button>
//             </span>
//         </li>
//     )


//     return (
//         <>
//             <div className='border border-2 border-dark w-50 m-auto p-2 rounded-3'>
//                 <h2 className='text-center py-2 text-dark'>Todolist Without LocalStorage</h2>
//                 <div className='d-flex justify-content-center p-4'>
//                     <form action="" onSubmit={(e) => e.preventDefault()}>
//                         <input type="text" className='py-2 px-3 me-2 fs-2 w-75 bg-transparent border-dark' value={task} onChange={e => setTask(e.target.value)} />
//                         <button type='submit' className="btn btn-dark px-3" onClick={editId == null ? addHandler : updateHandler}>{editId == null ? "add" : "update"}
//                         </button>
//                     </form>
//                 </div>
//                 <div>
//                     <ul>
//                         {finalData}
//                     </ul>
//                 </div>
//             </div>
//         </>
//     )
// }


// export default Todolist




import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, deleteHandler, editHandler } from '../features/todolist/todoSlice';

let nextId = 1;

function Todolist() {
    const addlist = useSelector((state) => state.todolist.value);
    const dispatch = useDispatch();
    const [task, setTask] = useState("");
    const [editId, setEditId] = useState(null);

    function addHandler() {
        if (task !== "") {
            const newlist = { id: nextId++, task };
            dispatch(add(newlist));
            setTask("");
        } else {
            alert("Please enter a task.");
        }
    }

    function handelEdit(id) {
        const editItem = addlist.find((ele) => ele.id === id);
        setTask(editItem.task);
        setEditId(id);
    }

    function updateHandler() {
        if (task) {
            const updateItem = { id: editId, task };
            dispatch(editHandler(updateItem));
            setTask("");
            setEditId(null);
        } else {
            alert("Please enter the task to update.");
        }
    }

    const finalData = addlist.map((item) => (
        <li key={item.id} className='list-group-item d-flex justify-content-between align-items-center'>
            {item.task}
            <span>
                <button className='btn btn-outline-warning me-2' onClick={() => handelEdit(item.id)}>Edit</button>
                <button className='btn btn-outline-danger' onClick={() => dispatch(deleteHandler(item.id))}>Delete</button>
            </span>
        </li>
    ));

    return (
        <div className='card border-dark  w-50 m-auto mt-5 p-4 rounded-3 shadow'>
            <h2 className='text-center text-dark'>Todo List Using Redux</h2>
            <div className='mb-3'>
                <form onSubmit={(e) => e.preventDefault()} className='d-flex'>
                    <input
                        type="text"
                        className='form-control me-2'
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        placeholder="Enter your task"
                    />
                    <button
                        type='submit'
                        className="btn btn-dark"
                        onClick={editId == null ? addHandler : updateHandler}
                    >
                        {editId == null ? "Add" : "Update"}
                    </button>
                </form>
            </div>
            <ul className='list-group'>
                {finalData}
            </ul>
        </div>
    );
}

export default Todolist;
