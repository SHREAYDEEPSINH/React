import React, { useEffect, useState } from 'react'

let nextId = 0;
function TodoLocalstorage() {

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

    // Delete task 
    function deleteHendler(id) {
        setItems(items.filter((e) => e.id !== id))
        console.log("deleted");

    }

    // Edit task 
    function editHendler(id, t) {
        setTask(t)
        setEditId(id)
    }

    // Update task
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
            <div className='border border-2 border-success w-100 m-auto p-2 rounded-3'>
                <h2 className='text-center py-2 text-success'>Todolist With LocalStorage</h2>
                <div className='d-flex justify-content-center p-4'>
                    <input type="text" className='py-2 px-3 me-2 fs-2 w-75 bg-transparent text-white border-success' value={task} onChange={e => setTask(e.target.value)} />
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
        </>
    )
}


export default TodoLocalstorage