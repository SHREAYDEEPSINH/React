import React, { useEffect, useState } from 'react'

let nextId = 0;
function LocalStorage() {

    let [task, setTask] = useState("");
    let [items, setItems] = useState(JSON.parse(localStorage.getItem("lsItems")) || []); // get items in localStorage

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

    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{ minHeight: "85vh" }}>
                <div className='border border-3 border-dark w-75 m-auto p-2 rounded-3 '>
                    <h2 className='text-center py-2'>Todolist With LocalStorage</h2>
                    <div className='d-flex justify-content-center p-4'>
                        <input type="text" className='py-2 px-3 me-2 fs-2 w-75 bg-transparent z border-danger' value={task} onChange={e => setTask(e.target.value)} />
                        <button type='submit' className="btn btn-danger px-3" onClick={(addHandler)}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LocalStorage
