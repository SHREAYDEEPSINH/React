import React from 'react'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Projects({ setNavbarColor }) {

  const sectionRef = useRef(null);

  useEffect(() => {
    // Create ScrollTrigger for color change
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 40px",
      end: "bottom 100px",
      onEnter: () => setNavbarColor("#4ADE80"), // Example color
      onLeaveBack: () => setNavbarColor("#333"), // Reset to default color
    });

    // Cleanup ScrollTrigger instance on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setNavbarColor]);

  
  return (
    <>
      <section className='projects panal' id='projects' ref={sectionRef}>
        <div className='container-md container-fluid py-5'>
          <div className="py-5 px-lg-5 px-4 d-flex flex-column gap-5">
            <div className='projects-head'>
              <h2 className='light-green fw-bold fs-1'>FEATURED PROJECTS</h2>
              <p className=' text-secondary'>Selected Works</p>
            </div>
            <div className=' projects-down row gap-4'>
              <div className='row pro-1 d-flex text-white'>
                <div className='col-md-4 lh-1'>
                  <p>01</p>
                  <p>FIBER CABLE DIRECT</p>
                </div>
                <div className='col-md-8 border-bottom d-flex justify-content-between gap-4'>
                  <h2 className=''>javaScript E-commerce Website</h2>
                  <a href="https://cheery-daffodil-52be00.netlify.app/" target='_blank' className='light-green text-decoration-none d-flex align-items-center'><span>View Project</span> <i class="fa-solid fa-arrow-right-long ms-2"></i></a>

                </div>
              </div>
              <div className='row pro-1 d-flex text-white'>
                <div className='col-md-4 lh-1'>
                  <p>01</p>
                  <p>Painter</p>
                </div>
                <div className='col-md-8 border-bottom d-flex justify-content-between gap-4'>
                  <h2 className=''>ReactJS E-commerce Website</h2>
                  <a href="https://painterecomweb.vercel.app/" target='_blank' className='light-green text-decoration-none d-flex align-items-center'><span>View Project</span> <i class="fa-solid fa-arrow-right-long ms-2"></i></a>

                </div>
              </div>
              <div className='row pro-1 d-flex text-white'>
                <div className='col-md-4 lh-1'>
                  <p>01</p>
                  <p> Job Fillter</p>
                </div>
                <div className='col-md-8 border-bottom d-flex justify-content-between gap-4'>
                  <h2 className=''>Responsive HTML, CSS Website</h2>
                  <a href="https://jobfillter.netlify.app/" target='_blank' className='light-green text-decoration-none d-flex align-items-center'><span>View Project</span> <i class="fa-solid fa-arrow-right-long ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects