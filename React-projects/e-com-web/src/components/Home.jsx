import React from 'react'

function Home() {
    return (
        <>
            <section >
                <div className='homemain d-flex align-items-center my-5 py-5 '>
                    <div className='container' >
                        <div className="card bg-transparent border-0 w-100" >
                            <div className="row g-0 align-items-center gap-3 justify-content-between">
                                <div className="col-md-5">
                                    <div className="card-body p-0 d-flex flex-column text-center text-md-start gap-4 homefistcard">
                                        <h5 className="card-title font2">Best In Painting</h5>
                                        <h1 className="fw-bold homeh1"><strong>Best online platform for painting</strong></h1>
                                        <p className="">Lorem ipsum dolor sit amet, conscetur adipiscing elit, sed do eimod <br /> tempor incididunt ut labore et dolore magna aliqua Quis</p>
                                        <span className='d-flex align-items-center justify-content-center justify-content-md-start'>
                                            <button className=' rounded border-0 text-white me-5'>Order Now</button>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img width={"100%"} src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/7210/16173/37x24-02__37180.1506574139.JPG?c=2" className="img-fluid rounded-start" alt=".." />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home