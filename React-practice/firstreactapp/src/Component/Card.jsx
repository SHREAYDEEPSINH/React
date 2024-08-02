import React from 'react'
import bgimg from "../Assets/menu_bg_4.png"


function Card() {
    return (
        <div  id='card' className='p-5' style={{backgroundImage: `url(${bgimg})`,backgroundColor : "rgb(244,239,227)"}}>
            <h2 className='text-center fs-1' style={{ color : "rgb(197,157,95)"}}>Today's Special</h2>
            <div className="container m-auto pt-0 row row-cols-1 row-cols-md-3 g-4" >
                <div className="col" >
                    <div className="card" style={{ backgroundColor : "rgb(244,239,227)" ,border : "1px solid rgb(197,157,95)"}}>
                        <img src="https://t4.ftcdn.net/jpg/06/21/54/41/360_F_621544128_inBjLYomzXLGFiNVri9ebirH1MMJ7ige.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Golab Jamun</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{ backgroundColor : "rgb(244,239,227)" ,border : "1px solid rgb(197,157,95)"}}>
                        <img src="https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Corn Kadai</h5>
                            <p className="card-text">This is a short card.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{ backgroundColor : "rgb(244,239,227)" ,border : "1px solid rgb(197,157,95)"}}>
                        <img src="https://images.pexels.com/photos/3049426/pexels-photo-3049426.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Hot chocolate brownie</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card



