import React from 'react'

function Aboutus() {
    return (
        <div className='container'>
            <div className="card py-5 my-5 border-0" style={{ width: "100%" }}>

                <div className="row g-0 align-items-center">
                    <div className="col-md-6">
                        <img height={"90%"} src="src/Assets/aboutusimg.png" className="img-fluid object-cover" alt="..." />
                    </div>
                    <div className="col-md-6 ps-md-5">
                        <div className="card-body">
                            <h5 className="font2 redcolor">About Us</h5>
                            <h2 className='fw-bold'>Why We Are The Best</h2>
                            <p className="card-text graycolor fs-6">Quis autem vel eum iure reprehenderit qui in evoluptate velit esse qua nihil molestiae consequatur, vel illum qui dolorem eum fugiat quvoluptas nulla pariatureaque ipsa quae ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo.</p>
                            <div class="card mb-3 border-0" style={{ width: "100%" }}>
                                <div class="d-flex">
                                    <div class="d-flex align-items-center">
                                        <img src="src/Assets/Buffet.png" class="img-fluid bg-warning bg-opacity-10 p-2" alt="..." />
                                    </div>
                                    <div class="">
                                        <div class="card-body">
                                            <h5 class="card-title fw-bold fs-6">Buffet Service
                                            </h5>
                                            <p class="card-text fs-6 graycolor">Qariatureaque ipsa quae a illo inventore
                                                veritatis et quasi architecto</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-3 border-0" style={{ width: "100%" }}>
                                <div class="d-flex">
                                    <div class="d-flex align-items-center">
                                        <img src="src/Assets/Booking.png" class="img-fluid bg-warning bg-opacity-10 p-2" alt="..." />
                                    </div>
                                    <div class="">
                                        <div class="card-body">
                                            <h5 class="card-title fw-bold fs-6">Online Booking
                                            </h5>
                                            <p class="card-text fs-6 graycolor">Qariatureaque ipsa quae a illo inventore
                                                veritatis et quasi architecto</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="border-0 p-4 py-2 rounded-1 text-white redcolor-bg">About Us</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus