import React from 'react'

function Projectpage() {
    return (
        <>

            <section>
                <div className='pageHeading'>
                    <h2>PROJECTS.</h2>
                </div>
            </section>
            <section className='projectpage-main'>
                <div className=' container-md container-fluid'>
                    <div class="d-flex my-5 py-5 flex-column justify-content-center align-items-center gap-5 project-card-main">
                        <div class="sticky-top ">
                            <div class="card project-card border-0 rounded-4">
                                <img src="src/assets/image.png" class="card-img-top h-75 object-fit-fill" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="sticky-top">
                            <div class="card project-card border-0 rounded-4">
                                <img src="src/assets/Screenshot 2024-12-16 213847.png" class="card-img-top h-75 object-fit-fill" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="sticky-top">
                            <div class="card project-card border-0 rounded-4">
                                <img src="src/assets/Screenshot 2024-12-16 213914.png" class="card-img-top h-75 object-fit-fill" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-5">
                                <div class="card project-card border-0">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="card project-card border-0">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="card project-card border-0">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="card project-card border-0">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projectpage