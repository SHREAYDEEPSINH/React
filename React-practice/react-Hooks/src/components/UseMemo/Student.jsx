import React from 'react'

function Student({name,marks,subject}) {
    console.log("Student")

    let percentage = (() =>{
        return (marks*100) / 100;
    },[marks])
  return (
    <>
        <div>
            <h2>Name : {name}</h2>
            <h2>Marks : {marks}</h2>
            <h2>Subject : {subject}</h2>
            <h2>Percentage : {percentage} %</h2>
        </div>
    </>
  )
}

export default Student