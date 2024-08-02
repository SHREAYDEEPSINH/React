import React from 'react'
import { ProductData } from './Data'
import Productprops from './Productprops'
function Product() {
    const carddata = ProductData.map((products) => (
        <li key={products.id} category={products.category}>

            <div className="card border border-2 border-success" style={{ width: "260px", height: "500px" }}>
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

    console.log(carddata)

    const mensProduct = carddata.filter((products) => products.props.category == "men's clothing")
    const womensProduct = carddata.filter((products) => products.props.category == "women's clothing")
    const electronicsProduct = carddata.filter((products) => products.props.category == "electronics")
    const jeweleryProduct = carddata.filter((products) => products.props.category == "jewelery")

    return (
        <div>
            <Productprops name="All Products" call={carddata} />
            <Productprops name="Mens Category" call={mensProduct} />
            <Productprops name="Womens Category" call={womensProduct} />
            <Productprops name="Electronocs Products" call={electronicsProduct} />
            <Productprops name="Jewelery Products" call={jeweleryProduct} />
        </div>
    )
}

export default Product