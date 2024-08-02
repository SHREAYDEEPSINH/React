import React from 'react'

function Womensproduct({img,title,Price,text}) {
    return (
        <div>
            <div className="card shadow" style={{width : "250px" ,height : "450px"}}>
                <img src={"src/Assets/"+img} className="card-img-top h-50 p-1 object-fit-contain" alt="..." />
                <div className="card-body text-center">
                    <h6 className="card-title">{title}</h6>
                    <h4 className="card-title">{Price} <span className='fs-5'>Rs</span></h4>
                    <p className="card-text">{text}</p>
                    <a href="#" className="btn bg-success text-white pe-4 ps-4 mb-1 fw-bold">Add To Cart</a>
                    <p className="card-text">FREE Delivery</p>

                </div>
            </div>
        </div>
    )
}

export default Womensproduct