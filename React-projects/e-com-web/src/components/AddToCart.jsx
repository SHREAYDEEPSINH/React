import { getDatabase, onValue, ref, remove, set } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { app } from '../firebase';

function AddToCart() {
    // const cartData = useSelector((state) => state.cart.items)
    // console.log(cartData);

    let [userData, setUserData] = useState([])
    let [key, setKey] = useState([])

    const database = getDatabase(app);

    useEffect(() => {
        const cartRef = ref(database, 'cart');
        onValue(cartRef, (snapshot) => {
            const data = snapshot.val();

            if (data) {
                setUserData(Object.values(data));
                const key = (Object.keys(snapshot.val()));
                setKey(key)
            } else {
                setUserData([]);
                setKey([]);
            }
        })
    }, [database]);

    function deleteHandler(ind) {
        const deleteItem = ref(database, `cart/${key[ind]}`)
        remove(deleteItem)
    }



    let finalData = userData.map((ele, ind) => (
        <div key={ind} className="card bg-transparent border-0" style={{ width: "250px" }}>
            <img src={ele.img} className="card-img-top border border-5 border-white object-fit-cover" style={{ height: "350px" }} alt="..." />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{ele.title}</h5>
                <p className="card-text">{ele.price}</p>
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