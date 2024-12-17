import React from 'react'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTheme } from './ThemeContext';

gsap.registerPlugin(ScrollTrigger);

function Skills({ setNavbarColor }) {

  const { theme } = useTheme();

  const sectionRef = useRef(null);

  const themeColors = {
    green: "#4ADE80", 
    red: "#de6f4a",
    yellow: "#dec84a", 
  };


  useEffect(() => {
    const sectionColor = themeColors[theme] ; 

    // Create ScrollTrigger for color change
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 40px",
      end: "bottom 10px",
      onEnter: () => setNavbarColor("#333"), // Example color
      onEnterBack: () => setNavbarColor("#333"),
      onLeaveBack: () => setNavbarColor("#333"), // Reset to default color
      onLeave: () => setNavbarColor("#333"),
    });

    // Cleanup ScrollTrigger instance on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setNavbarColor , theme , themeColors]);

  return (
    <>
      <section class="skills sticky-top" id='skills' ref={sectionRef}>
        <div class="container-md container-fluid">
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <h2 className={`light-light-${theme} fw-bold fs-1 superpower`}>🎉 SUPERPOWER 🎉</h2>
            <p className='text-secondary fw-bold'>which I have</p>

            <p className='fs-2 text-center text-white mb-5'>Turning ideas into functional, user-friendly web experiences with a blend of logic, creativity, and innovation</p>

            <div className='d-flex flex-wrap justify-content-center align-items-center gap-5'>
              <div><img width={"50px"} src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256" alt="" /></div>
              <div><img width={"50px"} src="https://cdn.iconscout.com/icon/free/png-256/free-css3-logo-icon-download-in-svg-png-gif-file-formats--css-programming-langugae-language-pack-logos-icons-1175237.png" alt="" /></div>
              <div><img width={"50px"} src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="" /></div>
              <div><img width={"50px"} src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" /></div>
              <div><img width={"50px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" /></div>
              <div><img width={"50px"} src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-512.png" alt="" /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills