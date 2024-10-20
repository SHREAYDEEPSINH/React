import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { InkWorkData } from './Data'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../features/counter/cart'
import { getDatabase, ref, set } from "firebase/database"
import { app } from '../firebase'


function InkWork() {

    const cartData = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    console.log(cartData);
    

    const database = getDatabase(app)
    let [sortData, setSortData] = useState("");

    const handleAddToCart = (item) => {
        let findIndex = cartData.findIndex((ele) => ele.id === item.id);
        let updatedCart;

        if (findIndex >= 0) {
            // Item already exists in the cart; increase quantity
            updatedCart = cartData.map((ele, index) => {
                if (index === findIndex) {
                    return { ...ele, quantity: ele.quantity + 1 };
                }
                return ele;
            });
        } else {
            // Add new item with quantity 1
            updatedCart = [...cartData, { ...item, quantity: 1 }];
        }

        dispatch(addToCart(updatedCart));

        // Set data in Firebase
        const cartRef = ref(database, 'cart/');
        set(cartRef, { items: updatedCart })
            .then(() => {
                alert("Item added to cart!");
                console.log('Cart saved to Firebase');
            })
            .catch((error) => {
                console.error('Error saving cart:', error);
            });
    };



    let finalData = InkWorkData.sort((a, b) => {
        return sortData == "Low to high" ? a.price - b.price : InkWorkData;
    })
        .sort((a, b) => {
            return sortData == "high to low" ? b.price - a.price : InkWorkData;
        }).map((ele) => (
            <div key={ele.id} className="card bg-transparent border-0" style={{ width: "300px" }}>
                <img src={ele.img} className="card-img-top border border-5 border-white object-fit-cover" style={{ height: "450px" }} alt="..." />
                <div className="card-body d-flex flex-column justify-content-between gap-2">
                    <h4 className="card-title">{ele.title}</h4>
                    <h5 className="card-text">{ele.price} Rs</h5>
                    <div>
                        <button href="#" className="btn border border-2 border-dark me-3 rounded-0" onClick={() => handleAddToCart(ele)}><RiShoppingCart2Fill className='fs-4 text-danger' /></button>
                        {/* <button href="" className="btn border border-2 border-dark rounded-0"><FaHeart className='fs-4 text-danger' /></button> */}
                    </div>
                </div>
            </div>
        ))


    return (
        <>
            <div className=' pb-5'>

                <div className='container my-4 d-flex justify-content-between align-items-center'>
                    <h2 className='fs-1 text-danger'>- Ink Work</h2>
                    <div>
                        <select
                            className="form-select border border-2 border-black fw-bold"
                            aria-label="Category select"
                            value={sortData}
                            onChange={(e) => setSortData(e.target.value)}
                        >
                            <option value="Sorting">Sorting</option>
                            <option value="Low to high">Low to high</option>
                            <option value="high to low">high to low</option>
                        </select>
                    </div>
                </div>
                <div className='d-flex flex-wrap justify-content-center gap-5'>
                    {finalData}
                </div>
            </div>

        </>
    )
}

export default InkWork