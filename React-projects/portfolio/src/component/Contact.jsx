import React from 'react'

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

function Contact({bgtheme , texttheme}) {

    // const sectionRef = useRef(null);

    // useEffect(() => {
    //   // Create ScrollTrigger for color change
    //   ScrollTrigger.create({
    //     trigger: sectionRef.current,
    //     start: "top 40px",
    //     end: "bottom 100px",
    //     onEnter: () => setNavbarColor("#333"), // Example color
    //     onLeaveBack: () => setNavbarColor("#333"), // Reset to default color
    //     // onLeave: () => setNavbarColor("#333"),
    //     // onEnterBack : () => setNavbarColor("#4ADE80")
    //   });
  
    //   // Cleanup ScrollTrigger instance on unmount
    //   return () => {
    //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    //   };
    // }, [setNavbarColor]);


    return (
        <>
            <section className='contact sticky-top' id='contact' >
                <div className='container-md container-fluid'>
                    <div className='d-flex flex-column align-items-center gap-4'>
                        <div className='contact-icon'><img width={"180px"} src="https://durgeshbachhav.vercel.app/assets/img/shakehands-Kg0DP_dG.svg" alt="" /></div>
                        <div className='d-flex gap-3'>
                            <a href="mailto:shreaydeepsinhvaghela@gmail.com" className='text-decoration-none'><button className='btn btn-dark rounded-5 fs-5  px-md-4 px-3 d-flex align-items-center'><i class="fa-regular fa-envelope fs-4 me-2"></i> Email Me</button></a>
                            <a href="https://wa.me/+91738373838" target='_blank' className='text-decoration-none'><button className={`btn ${bgtheme} rounded-5 fs-5 px-md-4 px-3 whatsAppbtn`}>WhatsApp</button></a>
                        </div>
                        <h2 className='linkedin-contact'><a href="https://www.linkedin.com/in/shreaydeepsinh-vaghela-6a271613a/" target='_blank' className={`text-decoration-none fw-bold ${texttheme}`}>LINKEDIN</a></h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact