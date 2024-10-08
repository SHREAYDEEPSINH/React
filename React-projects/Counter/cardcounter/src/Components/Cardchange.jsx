import React from 'react'
import { ProductData } from './Data'
import { useState } from 'react'

function Cardchange() {
    let [count, countState] = useState(0)

    function prev() {
        if (count != 0) {
            countState(count - 1)
        }
    }
    function next() {
        if (count < ProductData.length - 1) {
            countState(count + 1)
        }
    }

    const carddata = ProductData.map((products) => (
        <li key={products.id} className='list-unstyled'>
            <div className="card border-2 border-success" style={{ width: "270px", height: "500px" }}>
                <img src={products.image} className="card-img-top h-50 p-3 object-fit-contain" alt={products.title} />
                <div className="card-body  d-flex flex-column justify-content-between">
                    <h5 className="card-title">{products.title.slice(0, 20)}</h5>
                    <h5 className="card-title">{products.price} Rs</h5>
                    <p className="card-text">{products.description.slice(0, 80)}</p>
                    <a href="#" className="btn bg-gradient bg-success">Add To Cart</a>
                </div>
            </div>
        </li>
    ))

    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{height : "100vh"}}>
                <button type="button" className="btn btn-success h-25" onClick={prev}><i class="fa-solid fa-circle-left fa-lg" style={{color: "#ffffff"}}></i></button>
                <div className='mx-5'>
                    {carddata[count]}
                </div>
                <button type="button" className="btn btn-success h-25" onClick={next}><i class="fa-solid fa-circle-right fa-lg" style={{color: "#ffffff"}}></i></button>
            </div>
        </>
    )
}

export default Cardchange