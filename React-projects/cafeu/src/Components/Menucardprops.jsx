import React from 'react'

function Menucardprops() {
    return (
        <>
            <div className="card border-0 rounded-0" style={{ width: "26rem", boxShadow: " 0 6px 20px 1px #ddd " }}>
                <img src="https://cafeu-react.netlify.app/img/product/1.png" className="card-img-top rounded-0" alt="..." />
                <div className="card-body p-4">
                    <h5 className="card-title fs-6 fw-bold mb-3">Margherita Pizza</h5>
                    <p className="card-text graycolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus turpis</p>
                    <span className='d-flex justify-content-between'>
                        <p className='redcolor'>Delivery Fee : $10</p>
                        <span className='d-flex gap-1'>
                            <button href="#" className="btn border rounded-0"><i class="fa-solid fa-plus fa-lg fw-bolder" style={{color: "#D65C5C"}}></i></button>
                            <button href="#" className="btn btn-dark rounded-0"><i className="fa-solid fa-cart-shopping fa-sm" style={{ color: "#ffffff" }}></i></button>
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Menucardprops