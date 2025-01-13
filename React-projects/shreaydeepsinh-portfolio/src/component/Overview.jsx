import React from 'react'
import { useTheme } from './ThemeContext';
import { Link } from 'react-router-dom';

function Overview() {
    const { theme } = useTheme();
    return (
        <>
            <section className='overview panel sticky-top' id='about'>
                <div className="container-md container-fluid " >
                    <div className='row align-items-center flex-column-reverse flex-md-row'>
                        <div className='col-md-6 d-flex justify-content-center '>
                            <img width={"90%"} src="src/assets/self-Bsv3AQWc.svg" alt="" />
                        </div>
                        <div className='col-md-5 p-5 p-md-3'>
                            <div className="lh-1">
                                <p>Overview</p>
                                <p className={`light-${theme}`}>Who am I</p>
                            </div>
                            <h2 className='fs-1 fw-bold mt-5'>
                                I’m a Full-Stack Developer passionate about building dynamic, user-friendly and innovative web applications. 
                            </h2>

                            <Link to="/contact"><button className={`btn mt-5 light-${theme} `}>Know more <i className="fa-solid fa-arrow-right-long ms-2"></i></button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Overview