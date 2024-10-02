import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { RiShoppingCart2Fill } from 'react-icons/ri'

function InkWork() {

    let [inkWork, setInkWork] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:3000/InkWork`)
            .then((res) => {
                console.log(res.data);
                setInkWork(res.data)
            })
    }, [])



    return (
        <>
            <div className='container my-4'>
                <h2 className='fs-1'>- Ink Work</h2>
            </div>
            <div className='d-flex flex-wrap justify-content-center gap-5'>
                {inkWork.map((ele) => (
                    <div class="card bg-transparent border-0" style={{ width: "300px" }}>
                        <img src={ele.img} class="card-img-top border border-5 border-white object-fit-cover" style={{ height: "450px" }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{ele.title}</h5>
                            <p class="card-text">{ele.price}</p>
                            <a href="#" class="btn border border-2 border-dark me-3 rounded-0"><RiShoppingCart2Fill className='fs-4' /></a>
                            <a href="" class="btn border border-2 border-dark rounded-0"><FaHeart className='fs-4'/></a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default InkWork