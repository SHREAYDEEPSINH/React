import { getDatabase, onValue, ref, remove, set } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { app } from '../firebase';
import { removeFromCart, setCart } from '../features/counter/cart';

function AddToCart() {
    const cartData = useSelector((state) => state.cart.items)
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



    const updateQuantity = (index, newQuantity) => {
        if (newQuantity < 1) return; // Prevent negative quantities
        const updatedCart = cartData.map((item, i) =>
            i === index ? { ...item, quantity: newQuantity } : item
        );

        dispatch(setCart(updatedCart));
        const cartRef = ref(database, 'cart/');
        set(cartRef, { items: updatedCart })
            .then(() => console.log('Cart updated in Firebase'))
            .catch((error) => console.error('Error updating cart in Firebase:', error));
    };



    // Function to handle removing item from cart
    const deleteHandler = (index) => {
        const updatedCart = cartData.filter((ele, i) => i !== index); // Remove item by index
        dispatch(removeFromCart(index)); // Update Redux store

        const cartRef = ref(database, 'cart/');
        set(cartRef, { items: updatedCart })
            .then(() => console.log('Cart updated in Firebase'))
            .catch((error) => console.error('Error updating cart in Firebase:', error));
    };



    let totalPrice = 0;
    cartData.forEach(item => {
        totalPrice += item.price * item.quantity;
    });



    let finalData = cartData.map((ele, ind) => (
        <div key={ind} className="card bg-transparent border-0" style={{ width: "250px" }}>
            <img src={ele.img} className="card-img-top border border-5 border-white object-fit-cover" style={{ height: "350px" }} alt="..." />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{ele.title}</h5>
                <p className="card-text">{ele.price} Rs</p>
                <p className="card-text d-flex gap-3 align-items-center">
                    <span>Quantity</span>
                    <button className='btn btn-light border-danger-subtle' onClick={() => updateQuantity(ind, ele.quantity - 1)}>-</button>
                    {ele.quantity}
                    <button className='btn btn-light border-danger-subtle' onClick={() => updateQuantity(ind, ele.quantity + 1)}>+</button>
                </p>
                <div className='d-flex gap-3'>
                    <button href="" className="btn border border-2 border-danger rounded-0 text-danger">Buy Now</button>
                    <button href="" className="btn border border-2 border-danger rounded-0 text-danger" onClick={() => deleteHandler(ind)}>Remove</button>
                </div>
            </div>
        </div>
    ))



    return (
        <>
            <div className='container my-4 d-lg-flex justify-content-between'>
                <h2 className='fs-1 text-danger'>- Shopping Cart</h2>
                {cartData.length > 0 && (
                    <h3 className="text-danger d-lg-flex d-none align-items-center m-0">Total Cart: {totalPrice} Rs</h3>
                )}
            </div>
            <div className='container d-flex flex-wrap justify-content-center gap-5'>
                {(finalData) ? (finalData) : (`Loding`)}
            </div>

            <hr />
            {cartData.length > 0 && (
                    <div className='container'>
                        <h3 className=" text-danger d-lg-none d-flex justify-content-center">Total Cart: {totalPrice} Rs</h3>
                    </div>
                )}
        </>
    )
}

export default AddToCart