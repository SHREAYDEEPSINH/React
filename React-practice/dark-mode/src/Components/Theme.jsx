import React, { useState } from 'react'
import './Theme.css'

function Theme() {
    const [mode, setmode] = useState({
        theme: "",
    })

    function themes(e) {
        setmode({
            theme: e.target.value,
        })
    }
    return (
        <>

            <select className='p-1 m-2 bg-black text-white rounded-3' onClick={themes}>
                <option value="select">Theme</option>
                <option value="Green">Green</option>
                <option value="Yellow" >Yellow</option>
                <option value="Blue" >Blue</option>
                <option value="Red" >Red</option>
            </select>

            <div className="container m-auto row row-cols-1 row-cols-md-4 g-4 one" >
                <div className="col" >
                    <div className="card" data-bs-theme={mode.theme}>
                        <img height={"250px"} src="https://images.pexels.com/photos/15885610/pexels-photo-15885610/free-photo-of-lighthouse-on-cliff-at-seashore-on-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top object-fit-cover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" data-bs-theme={mode.theme}>
                        <img height={"250px"} src="https://images.pexels.com/photos/18103065/pexels-photo-18103065/free-photo-of-tents-in-snow-at-foot-of-the-mountain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top object-fit-cover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" data-bs-theme={mode.theme}>
                        <img height={"250px"} src="https://images.pexels.com/photos/27407537/pexels-photo-27407537/free-photo-of-nile-river.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top object-fit-cover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" data-bs-theme={mode.theme}>
                        <img height={"250px"} src="https://images.pexels.com/photos/27269439/pexels-photo-27269439/free-photo-of-road-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top object-fit-cover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Theme