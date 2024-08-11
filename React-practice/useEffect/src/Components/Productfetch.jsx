import React, { useEffect, useState } from 'react'

function Productfetch() {
    const [userId, setUserId] = useState(1)
    const [userData, setUserData] = useState(null)

    useEffect(() => {

        const cardData = async () => {
            try {
                const apiFetch = await fetch(`https://fakestoreapi.com/products/${userId}`);
                const data = await apiFetch.json();
                setUserData(data);
            } catch (error) {
                console.log("Data Error")
            }
        }
        cardData()

    }, [userId]);


    return (
        <>
            <div className='text-center bg-black py-3'>
                {userData ? (
                    <div className="card m-auto my-3" style={{ width: "22rem", height: "400px" }}>
                        <img src={userData.image} height={"50%"} className="card-img-top object-fit-contain" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{userData.title.slice(0, 30)}</h5>
                            <p className="card-text">{userData.description.slice(0, 100)}</p>
                            <a href="#" className="btn btn-primary">{userData.price} Rs</a>
                        </div>
                    </div>
                ) : (
                    <h3>Loding.....</h3>
                )}

                <button type="button" className="btn btn-success me-3"
                    onClick={() => { (userId > 1) ? (setUserId(userId - 1)) : (console.log("data over"))} }>-</button>
                <button type="button" className="btn btn-success"
                    onClick={() => {(userId < 20)? (setUserId(userId + 1)) : (console.log("data over"))} }>+</button>
            </div>
        </>
    )
}

export default Productfetch