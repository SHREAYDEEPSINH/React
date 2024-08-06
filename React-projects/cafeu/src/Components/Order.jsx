import React from 'react'

function Order() {
    return (
        <>
            <div className='container py-5 my-5'>
                <div class="card mb-3 order-back-img" style={{ width: "100%" ,height :"400px" }}>
                    <div class="row g-0">
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src="..." class="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order