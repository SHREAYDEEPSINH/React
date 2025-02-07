import React from 'react'

function SpecialOffers() {
    return (
        <section>
            <div className='SpecialOffers-back-img'>
                <div className='container py-lg-5 py-md-3 py-0'>
                    <div className='row py-5 m-2 justify-content-center align-items-center'>
                        <div className='col-md-6'>
                            <h3 className='fw-bolder text-white my-2'>Stay Informed About Special Offers</h3>
                            <p className='text-white my-2'>For Exclusive Deals, Coupons, News and More!</p>
                        </div>
                        <div className='col-md-6'>
                            <form class="container p-0 mt-1">
                                <div class="input-group">
                                    <input type="text" class="form-control  rounded-0" placeholder="Enter Your Email" />
                                    <button class="text py-2 px-3 rounded-0 border-0 redcolor-bg"><i class="fa-solid fa-location-arrow" style={{color: "#ffffff"}}></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialOffers