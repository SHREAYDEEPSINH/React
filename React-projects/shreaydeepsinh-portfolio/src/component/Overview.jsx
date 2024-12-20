import React from 'react'
import { useTheme } from './ThemeContext';

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
                        <div className='col-md-6 p-5 p-md-3'>
                            <div className="lh-1">
                                <p>Overview</p>
                                <p className={`light-${theme}`}>Who am I</p>
                            </div>
                            <h2 className='fs-2 fw-bold mt-5'>
                                I’m a Full-Stack Developer passionate about building dynamic, user-friendly web applications. <br /><br /> I build scalable, efficient solutions that work seamlessly across all devices. <br /><br /> I’m always exploring new technologies to enhance my skills and love collaborating to deliver impactful results.
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