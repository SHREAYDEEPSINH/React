import React, { useState } from 'react'

let nextId = 0;
function Todolist() {

    let [task, setTask] = useState("");
    let [items, setItems] = useState([]);
    let [editId, setEditId] = useState(null);

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
                <button className='btn btn-info' onClick={() => editHendler(item.id, item.task)}>Edit</button>
                <button className='btn btn-info ms-2' onClick={() => deleteHendler(item.id)}>Delete</button>
            </span>
        </li>
    )

    function deleteHendler(id) {
        setItems(items.filter((e) => e.id !== id))
        console.log("deleted");
    }

    function editHendler(id, t) {
        setTask(t)
        setEditId(id)
    }


    function updateHandler() {
        if (task !== "") {
            let one = items.map((item) =>
                (item.id === editId) ? ({ ...item, task: task }) : (item)
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
            <div className=' bg-info bg-opacity-25 w-50 m-auto p-2'>
                <h1 className='text-center pt-3'>To Do List</h1>
                <div className='d-flex justify-content-center p-5'>
                    <input type="text" className='py-2 px-3 me-2 fs-2 w-75' value={task} onChange={e => setTask(e.target.value)} />
                    <button type='submit' className="btn btn-info px-4" onClick={(editId == null) ? (addHandler) : (updateHandler)}>
                        {(editId == null) ? "Add" : "Update"}
                    </button>
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