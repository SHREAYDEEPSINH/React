import React, { useState } from 'react'

function Todolist() {

    const [userInput, setUserInput] = useState("")
    const [data, setData] = useState([])  // array for multiple Data


    function addHendler(e) {
        setUserInput(e.target.value)
    }

    function rendering(e) {
        setData([...data, userInput]);   //spread opretor for previus data
        setUserInput("")
    }

    const finalData = data.map((ele, ind) => (
        <li key={ind} className='d-flex justify-content-between p-2 border-bottom border-2 border-black'>
            {ele}
            <span>
                <button type="button" className="btn btn-success" onClick={() =>editHendler(ind)}>Edit</button>
                <button type="button" className="btn btn-success ms-2" onClick={() =>deleteHendler(ind)}>Delete</button>
            </span>
        </li>
    ))

    function deleteHendler(index){
        console.log(index);
        data.splice(index,1)
        setData([...data]);
    }

    function editHendler(index){
        console.log(index);
        setUserInput(data[index])
        setData([...data]);
    }

    function updateHendler(index){
        data.splice(index, 1 , (userInput))
        setData([...data]);
    }


    return (
        <>
            <div className=' bg-success bg-opacity-25 w-50 m-auto p-2'>
                <div className='d-flex justify-content-center p-5'>
                    <input type="text" className='py-3 px-5 me-2 fs-2' value={userInput} onChange={addHendler} />
                    <button type='submit' className="btn btn-success px-3" onClick={rendering}>Add</button>
                    <button type='submit' className="btn btn-success px-3" onClick={updateHendler}>Update</button>
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