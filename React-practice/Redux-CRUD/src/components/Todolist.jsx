import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, deleteHandler, editHandler } from '../features/todolist/todoSlice';

let nextId = 1;
function Todolist() {
    const addlist = useSelector((state) => state.todolist.value)
    const dispatch = useDispatch()

    let [task, setTask] = useState("");
    let [items, setItems] = useState([]);
    let [editId, setEditId] = useState(null);

    function addHandler() {
        if (task !== "") {
            const newlist = { id: nextId++, task }
            dispatch(add(newlist))
            setTask("")
        } else {
            alert("Enter value")
        }
    }

    let finalData = addlist.map((item) =>
        <li key={item.id} className='d-flex justify-content-between my-2'>
            {item.task}
            <span>
                <button className='btn btn-info' onClick={() => dispatch(editHandler(item.id, item.task))}>Edit</button>
                <button className='btn btn-info ms-2' onClick={() => dispatch(deleteHandler(item.id))}>Delete</button>
            </span>
        </li>
    )

    // // Delete task 
    // function deleteHendler(id) {
    //     setItems(items.filter((e) => e.id !== id))
    //     console.log("deleted");

    // }

    // // Edit task 
    // function editHendler(id, t) {
    //     setTask(t)
    //     setEditId(id)
    // }

    // // Update task
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
            <div className='border border-2 border-info w-100 m-auto p-2 rounded-3'>
                <h2 className='text-center py-2 text-info'>Todolist Without LocalStorage</h2>
                <div className='d-flex justify-content-center p-4'>
                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" className='py-2 px-3 me-2 fs-2 w-75 bg-transparent border-info' value={task} onChange={e => setTask(e.target.value)} />
                        <button type='submit' className="btn btn-info px-3" onClick={() => addHandler()}>Add
                        </button>
                    </form>
                </div>
                <div>
                    <ul>
                        {finalData}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todolist