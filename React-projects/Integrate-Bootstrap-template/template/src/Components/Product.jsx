import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
function Product() {

    let [userData, setUserData] = useState([])
    let [filterData, setFilterData] = useState(null)

    useEffect(() => {

        const cardData = async () => {
            try {
                const apiFetch = await fetch(`https://fakestoreapi.com/products/`);
                const data = await apiFetch.json();
                setUserData(data);
            } catch (error) {
                console.log("Data Error")
            }
        }
        cardData()    
    }, []);


    let carddata = userData.map((products) => (
        <li key={products.id} category={products.category}>

            <div className="card border border-2 border-secondary" style={{ width: "260px", height: "500px" }}>
                <img src={products.image} className="card-img-top h-50 p-3 object-fit-contain" alt={products.title} />
                <div className="card-body  d-flex flex-column justify-content-between">
                    <h5 className="card-title">{products.title.slice(0, 20)}</h5>
                    <h5 className="card-title">{products.price} Rs</h5>
                    <p className="card-text">{products.description.slice(0, 80)}</p>
                    <a href="#" className="btn bg-gradient bg-dark text-white">Add To Cart</a>
                </div>
            </div>
        </li>
    ))

    function all(){
        setFilterData(carddata)
    }
    function men() {
        setFilterData(carddata.filter((products) => products.props.category == "men's clothing"))
    }
    function women() {
        setFilterData(carddata.filter((products) => products.props.category == "women's clothing"))
    }
    function jewelery() {
        setFilterData(carddata.filter((products) => products.props.category == "jewelery"))
    }
    function electronics() {
        setFilterData(carddata.filter((products) => products.props.category == "electronics"))
    }


    return (
        <div className='bg-secondary-subtle'>
            <Navbar all={all} men={men} women={women} jewelery={jewelery} electronics={electronics} />

            <div>
                <ul className='list-unstyled d-flex flex-wrap gap-2 justify-content-center py-4 m-0'>
                    {(filterData == null)? (carddata): (filterData)}
                </ul>
            </div>
        </div>
    )
}

export default Product