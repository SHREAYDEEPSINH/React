import React from 'react'
import Menucardprops from './Menucardprops'

function Menu() {
    return (
        <div className='menu-back-img py-5 h-auto'>
            <div className='container pt-5 text-center' >
                <h5 className="font2 redcolor mb-3">Special Menu</h5>
                <h2 className='fw-bold'>Our Specials Menu</h2>
            </div>
            <div className='d-flex flex-column align-items-center mt-3'>
                <ul className="nav nav-pills mb-5 gap-2 justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active d-flex flex-column align-items-center text-secondary p-2 pb-1" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true"><img width={"70px"} src="https://cafeu-react.netlify.app/img/category/icon/7.png" alt="" /> <span className='font2 fs-5'>All</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link d-flex flex-column align-items-center text-secondary p-2 pb-1" id="pills-Pizza-tab" data-bs-toggle="pill" data-bs-target="#pills-Pizza" type="button" role="tab" aria-controls="pills-Pizza" aria-selected="false"><img width={"70px"} src="https://cafeu-react.netlify.app/img/category/icon/1.png" alt="" /> <span className='font2 fs-5 '>Pizza</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link d-flex flex-column align-items-center text-secondary p-2 pb-1" id="pills-Asian-tab" data-bs-toggle="pill" data-bs-target="#pills-Asian" type="button" role="tab" aria-controls="pills-Asian" aria-selected="false"><img width={"70px"} src="https://cafeu-react.netlify.app/img/category/icon/2.png" alt="" /> <span className='font2 fs-5 '>Asian</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link d-flex flex-column align-items-center text-secondary p-2 pb-1" id="pills-Burger-tab" data-bs-toggle="pill" data-bs-target="#pills-Burger" type="button" role="tab" aria-controls="pills-Burger" aria-selected="false"><img width={"70px"} src="https://cafeu-react.netlify.app/img/category/icon/1.png" alt="" /> <span className='font2 fs-5 '>Burger</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link d-flex flex-column align-items-center text-secondary p-2 pb-1" id="pills-Salad-tab" data-bs-toggle="pill" data-bs-target="#pills-Salad" type="button" role="tab" aria-controls="pills-Salad" aria-selected="false"><img width={"70px"} src="https://cafeu-react.netlify.app/img/category/icon/1.png" alt="" /> <span className='font2 fs-5 '>Salad</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link d-flex flex-column align-items-center text-secondary p-2 pb-1" id="pills-Bakery-tab" data-bs-toggle="pill" data-bs-target="#pills-Bakery" type="button" role="tab" aria-controls="pills-Bakery" aria-selected="false"><img width={"70px"} src="https://cafeu-react.netlify.app/img/category/icon/1.png" alt="" /> <span className='font2 fs-5 '>Bakery</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link d-flex flex-column align-items-center text-secondary p-2 pb-1" id="pills-Drink-tab" data-bs-toggle="pill" data-bs-target="#pills-Drink" type="button" role="tab" aria-controls="pills-Drink" aria-selected="false"><img src="https://cafeu-react.netlify.app/img/category/icon/1.png" alt="" /> <span className='font2 fs-5 '>Drink</span></button>
                    </li>

                </ul>
                <div className="container tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
                        <div className='d-flex justify-content-center flex-wrap  gap-5'>
                            <Menucardprops />
                            <Menucardprops />
                            <Menucardprops />
                            <Menucardprops />
                            <Menucardprops />
                            <Menucardprops />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Pizza" role="tabpanel" aria-labelledby="pills-Pizza-tab" tabIndex="0">
                        <div className='d-flex flex-wrap gap-4'>
                            <Menucardprops />
                            <Menucardprops />
                            <Menucardprops />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Asian" role="tabpanel" aria-labelledby="pills-Asian-tab" tabIndex="0">
                        <div className='d-flex flex-wrap gap-4'>
                            <Menucardprops />
                            <Menucardprops />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Burger" role="tabpanel" aria-labelledby="pills-Burger-tab" tabIndex="0">
                        <div className='d-flex flex-wrap gap-4'>
                            <Menucardprops />
                            <Menucardprops />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Salad" role="tabpanel" aria-labelledby="pills-Salad-tab" tabIndex="0">
                        <div className='d-flex flex-wrap gap-4'>
                            <Menucardprops />
                            <Menucardprops />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Bakery" role="tabpanel" aria-labelledby="pills-Bakery-tab" tabIndex="0">
                        <div className='d-flex flex-wrap gap-4'>
                            <Menucardprops />
                            <Menucardprops />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Drink" role="tabpanel" aria-labelledby="pills-Drink-tab" tabIndex="0">
                        <div className='d-flex flex-wrap gap-4'>
                            <Menucardprops />
                            <Menucardprops />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu