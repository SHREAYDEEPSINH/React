import { getDatabase, onValue, ref, remove, set } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { app } from '../firebase';
import { removeFromCart, setCart } from '../features/counter/cart';

function AddToCart() {
    const cartData= useSelector((state) => state.cart.items)
    console.log(cartData,"cartData");
    const dispatch = useDispatch()


    const database = getDatabase(app);


    useEffect(() => {

        const cartRef = ref(database, 'cart/');
        onValue(cartRef, (snapshot) => {
            const data = snapshot.val();

            if (data && data.items) {
                dispatch(setCart(data.items))
            }
        })
    }, [dispatch]); 

    
     // Function to handle removing item from cart
     const deleteHandler = (index) => {
        const updatedCart = cartData.filter((ele, i) => i !== index); // Remove item by index
        dispatch(removeFromCart(index)); // Update Redux store

        const cartRef = ref(database, 'cart/');
        set(cartRef, { items: updatedCart })
            .then(() => console.log('Cart updated in Firebase'))
            .catch((error) => console.error('Error updating cart in Firebase:', error));
    };

    


    let finalData = cartData.map((ele, ind) => (
        <div key={ind} className="card bg-transparent border-0" style={{ width: "250px" }}>
            <img src={ele.img} className="card-img-top border border-5 border-white object-fit-cover" style={{ height: "350px" }} alt="..." />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{ele.title}</h5>
                <p className="card-text">{ele.price} Rs</p>
                <div className='d-flex gap-3'>
                    <button href="" className="btn border border-2 border-danger rounded-0 text-danger">Buy Now</button>
                    <button href="" className="btn border border-2 border-danger rounded-0 text-danger" onClick={() => deleteHandler(ind)}>Remove</button>
                </div>
            </div>
        </div>
    ))


    return (
        <>
            <div className='container my-4'>
                <h2 className='fs-1 text-danger'>- Shopping Cart</h2>
            </div>
            <div className='container d-flex flex-wrap justify-content-center gap-5'>
                {finalData}
            </div>
        </>
    )
}

export default AddToCart