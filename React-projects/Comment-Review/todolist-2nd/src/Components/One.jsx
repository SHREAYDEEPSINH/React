import React, { useState } from "react";

export default function One() {
    const [name, setName] = useState("");
    const [record, setRecord] = useState([]);


    const handleBtn = () => {
        setRecord([...record, name]);
        setName('')
    };
    const handleDelete = (index) => {
        let newRecord = record.filter((e, i) => {
            return i != index
        })
        setRecord(newRecord)
    }
    const handleEdit = (i) => {
        let singleRecord = record[i];
        singleRecord = record[i]
        setName(singleRecord)
        console.log(singleRecord);

        // setRecord(singleRecord)
        

    }
    return (
        <div>
            <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <button onClick={handleBtn}>submit</button>

            {record ?
                record.map((e, i) => {
                    return <div key={i}>
                        <p>{e}</p>
                        <button onClick={() => handleDelete(i)} >delete</button>
                        <button onClick={() => handleEdit(i)}>edit</button>
                    </div>
                }) : <p>loading</p>}
        </div>
    );
}