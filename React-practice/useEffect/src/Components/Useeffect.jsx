import React, { useEffect, useState } from 'react'

function Useeffect() {
   const [count , setcount]= useState(0)

   console.log("component mount")
   useEffect(() => {
    // call to be Executed

    console.log("count" ,count)
    
    console.log("component unmount")

    return (()=>{
      // component unmount 
       console.log("clean up")
    })


   },[count])

  return (
    <>
        <div className='container d-flex justify-content-center my-5'>
            <button className='btn btn-danger' onClick={()=> setcount(count-1)}>-</button>
            <h2 className='mx-3 '>{count}</h2>
            <button className='btn btn-danger' onClick={()=> setcount(count+1)}>+</button>
        </div>
    </>
  )
}

export default Useeffect