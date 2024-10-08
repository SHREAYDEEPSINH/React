import React from 'react'

function Footer() {
    return (
        <>
            <footer className="bg-body-tertiary text-center text-lg-start">
                <div className="card rounded-0" data-bs-theme="dark">
                    <div className="container d-flex justify-content-between rounded-5 my-1 card-footer text-body-secondary">
                        <h6 className='m-0'> © Copyright 2024. ShopNow PVT LTD. All Rights Reserved.</h6>
                        <div>
                            <a href="#" className="text-decoration-none "><i className="fa-brands fa-linkedin fa-xl"></i></a>
                            <a href="#" className="text-decoration-none ms-3"><i className="fa-brands fa-github fa-xl"></i></a>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer