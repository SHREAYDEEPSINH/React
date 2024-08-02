import React from 'react'

function Slider() {
    return (
        <div id="carouselExampleCaptions"   className="carousel slide">
            <div className="carousel-indicators" >
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" >
                <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg" className="d-block w-100 object-fit-cover" style={{ height: 530 }} alt="..." />
                </div>
                <div className="carousel-item" >
                    <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" className="d-block w-100 object-fit-cover" style={{ height: 530 }} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/free-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18716.jpg?w=1380&t=st=1720335552~exp=1720336152~hmac=4def7cef5cce347602bdb7b69683d9ded2d468c7111016c56d053ce306fe666d" className="d-block w-100 object-fit-fill" style={{ height: 530 }} alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider