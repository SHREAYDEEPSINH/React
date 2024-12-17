import React from 'react'

function Overview({texttheme}) {
    return (
        <>
            <section className='overview panel sticky-top' id='about'>
                <div className="container-md container-fluid " >
                    <div className='row align-items-center flex-column-reverse flex-md-row'>
                        <div className='col-md-6 d-flex justify-content-center '>
                            <img width={"90%"} src="src/assets/self-Bsv3AQWc.svg" alt="" />
                        </div>
                        <div className='col-md-6 p-5 p-md-3'>
                            <div className="lh-1">
                                <p>Overview</p>
                                <p className={`${texttheme}`}>Who am I</p>
                            </div>
                            <h2 className=' fw-bold my-5'>
                                I'm a full-stack developer passionate about building innovative web applications and digital experiences
                            </h2>

                            {/* <button className={`btn ${texttheme}`}>Know more</button> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Overview