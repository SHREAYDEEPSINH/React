import React, { useState } from 'react'



let nextId = 0;
const Todolist = () => {

    let [addData, setAddData] = useState("")
    let [list, setList] = useState([])
    let [editId , setEditId] = useState(null)


    let addHandler = (e) => {
        e.preventDefault()
        setList([...list, { id: nextId++, addData: addData }])
    }
    console.log(list)

    let deleteHandler=(id)=>{
       setList(list.filter((ele ,i)=> ele.id !== id ))
    }

    let editHandler=(ele)=>{
        setAddData(ele.addData)
        setEditId(ele.id)
    }
    
    let updateHandler=(e)=>{
        e.preventDefault()
        setList(list.map((ele,ind)=> (ele.id==editId)? ({...ele , addData:addData}) : (ele)))

        setEditId(null)
    }

    return (
        <>
            <form>
                <input type="text" value={addData} onChange={(e) => setAddData(e.target.value)} />
                <button type='submit' onClick={(editId==null)? addHandler : updateHandler}>{(editId == null)? "Add" : "Update"}</button>
            </form>

            <ul>
                {list.map((ele, ind) =>
                    <li key={ind}>
                        <span>{ele.addData}</span>
                        <button onClick={()=>deleteHandler(ele.id)}>Delete</button>
                        <button onClick={()=>editHandler(ele)}>Edit</button>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Todolist