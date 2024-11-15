import { getDatabase, onValue, ref, set } from 'firebase/database';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { app } from '../firebase';
import { addToWishlist, setWishlist } from '../features/counter/wishlist';
import { removeFromCart } from '../features/counter/cart';

function Wishlist() {

    const wishlistData = useSelector((state) => state.wishlist.wishlistItems)
    const dispatch = useDispatch()

    let database = getDatabase(app)

    useEffect(() => {

        let cartRef = ref(database, "wishlist/");
        onValue(cartRef, (snapshot) => {
            let data = snapshot.val();

            if (data) {
                dispatch(setWishlist(data.items || []))
                
            }
        })

    }, [dispatch, database])


    const deleteHandler = (index) => {
        const updatedWishlist = wishlistData.filter((ele, i) => i !== index); // Remove item by index
        

        const cartRef = ref(database, 'wishlist/');
        set(cartRef, { items: updatedWishlist})
            .then(() => {
                console.log('wishlist updated in Firebase')
                dispatch(removeFromCart(index)); // Update Redux store  
                dispatch(setWishlist(updatedWishlist)); // re-render
            })
            .catch((error) => console.error('Error updating wishlist in Firebase:', error));
    }


    let finalData = wishlistData.map((ele, ind) => (
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
            <div className='container my-4 d-lg-flex justify-content-between'>
                <h2 className='fs-1 text-danger'>- Wishlist</h2>
            </div>
            <div className='container d-flex flex-wrap justify-content-center gap-5'>
                {finalData}
            </div>
        </>
    )
}

export default Wishlist