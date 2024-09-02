import React, { useEffect, useState } from 'react'
function Product() {

    let [userData, setUserData] = useState([])
    let [filterData, setFilterData] = useState(null)
    let [searchData, setSearchData] = useState([])

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



    let filterdata = userData.filter(({ category }) => {
        return (filterData) ? (category == filterData) : (userData)

    }).filter(({ title }) => {
        return title.indexOf(searchData) >= 0;
    }).map((products) => (
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


    return (
        <div className='bg-secondary-subtle'>
            <div>
                <div className='container d-flex justify-content-between align-items-center'>

                    <form className="d-flex mt-3 w-50" >
                        <input className="p-1 w-50 rounded-2" type="search" placeholder="Search" aria-label="Search" value={searchData} onChange={(e) => setSearchData(e.target.value)} />
                    </form>
                    <div className='mt-3'>
                        <select className="form-select border border-2 border-black" aria-label="Category select" value={filterData} onChange={(e) => setFilterData(e.target.value)}>
                            <option value="">All Categories</option>
                            <option value="men's clothing">Men's Clothing</option>
                            <option value="women's clothing">Women's Clothing</option>
                            <option value="jewelery">Jewelry</option>
                            <option value="electronics">Electronics</option>
                        </select>
                    </div>


                </div>
                <ul className='list-unstyled d-flex flex-wrap gap-2 justify-content-center py-4 m-0'>
                    {filterdata}
                </ul>
            </div>
        </div>
    )
}

export default Product