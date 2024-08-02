import React from 'react'



function Cardsprops({ img1, title, pera }) {
    
    return (
        <div>
            <div className="card bg-black text-white border-2 " style={{ width: "300px", borderImage: "linear-gradient( yellow,green,yellow,green,yellow,green) 1"}}>
                <img src={"src/assets/"+img1+".jpeg"} className="card-img-top" style={{ height: "200px" }} alt="..." />
                <div className="card-body" style={{ display: "flex", flexDirection: "column", flexBasis: "270px" }}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" style={{ display: "flex", flexDirection: "column", flexBasis: "150px" }} >{pera}</p>
                    <a href="#" className="btn btn-dark" >Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Cardsprops;