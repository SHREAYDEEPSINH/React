import React from 'react'

function Mensproduct({img,title,Price,text}) {
    return (
        <div>
            <div className="card shadow" style={{width : "250px" ,height : "430px"}}>
                <img src={"src/Assets/"+img} className="card-img-top h-50 p-1 object-fit-contain" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <h4 className="card-title">{Price} <span className='fs-5'>Rs</span></h4>
                    <p className="card-text">{text}</p>
                    <a href="#" className="btn text-bg-secondary pe-4 ps-4 mb-2 fw-bold">Add To Cart</a>
                    <p className="card-text">FREE Delivery</p>
                </div>
            </div>
        </div>
    )
}

export default Mensproduct