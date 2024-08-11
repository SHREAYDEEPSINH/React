import React, { useState } from 'react'

let nextId = 0;
function Todolist() {

    let [task, setTask] = useState("");
    let [items, setItems] = useState([]);
    let [editId, setEditId] = useState(null);

    function addHandler() {
        setItems([...items, { id: nextId++, task: task }])
        setTask("")
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

        // let one = items.find((e) => e.id === id)
        // editId = one.id
        // setItems(one)
        // console.log(one.task)

        // if(one){

        //     console.log(task ,"task")
        // }
        // if (one) {
        //     setItems(task)
        // }
        // setItems()

        setTask(t)
        setEditId(id)
    }


    function updateHandler(e) {

        // let one = items.find((e) => e.id === index)
        // one.task = task
        // console.log(one);

        let one=items.map((item) =>
            (item.id === editId) ? ({ ...item, task: task }) : (item)
        )

        setItems(one)
        setTask("")
        setEditId(null)
    }



    return (
        <>
            <div className=' bg-info bg-opacity-25 w-50 m-auto p-2'>
                <div className='d-flex justify-content-center p-5'>
                    <input type="text" className='py-2 px-3 me-2 fs-2 w-75 ' value={task} onChange={e => setTask(e.target.value)} />
                    <button type='submit' className="btn btn-info px-3" onClick={(editId == null) ? (addHandler) : (updateHandler)}>
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