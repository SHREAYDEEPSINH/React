import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { AbstractArtData } from './Data'
import { useDispatch, useSelector } from 'react-redux'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../firebase'
import { addToCart } from '../features/counter/cart'


function AbstractArt() {


    const cartData = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()

    const database = getDatabase(app)

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));

        // Set data in Firebase
        const cartRef = ref(database, 'cart/' + item.id); // Adjust the path as necessary
        set(cartRef, {
            title: item.title,
            price: item.price,
            img: item.img,
            // Add any other fields you want to store
        })
            .then(() => {
                console.log('Data saved successfully!');
            })
            .catch((error) => {
                console.error('Error saving data:', error);
            });
    };



    let finalData = AbstractArtData.map((ele) => (
        <div key={ele.id} className="card bg-transparent border-0" style={{ width: "300px" }}>
            <img src={ele.img} className="card-img-top border border-5 border-white object-fit-cover" style={{ height: "450px" }} alt="..." />
            <div className="card-body d-flex flex-column justify-content-between gap-2">
                <h4 className="card-title">{ele.title}</h4>
                <h5 className="card-text">{ele.price} Rs</h5>
                <div>
                    <button href="#" className="btn border border-2 border-dark me-3 rounded-0" onClick={() => handleAddToCart(ele)} ><RiShoppingCart2Fill className='fs-4 text-danger' /></button>
                    {/* <button href="" className="btn border border-2 border-dark rounded-0"><FaHeart className='fs-4 text-danger' /></button> */}
                </div>
            </div>
        </div>
    ))


    return (
        <div className=' pb-5'>

            <div className='container my-4'>
                <h2 className='fs-1 text-danger'>- Abstract Art</h2>
            </div>
            <div className='d-flex flex-wrap justify-content-center gap-5'>
                {finalData}
            </div>
        </div>
    )
}

export default AbstractArt