// import React from 'react'

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// function Projects({ setNavbarColor }) {

//   const sectionRef = useRef(null);

//   useEffect(() => {
//     // Create ScrollTrigger for color change
//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top 40px",
//       end: "bottom 40px",
//       onEnter: () => setNavbarColor("#4ADE80"), // Example color
//       onLeaveBack: () => setNavbarColor("#333"), // Reset to default color
//       onLeave: () => setNavbarColor("#333"),
//       onEnterBack: () => setNavbarColor("#4ADE80")
//     });

//     // Cleanup ScrollTrigger instance on unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [setNavbarColor]);


//   return (
//     <>
//       <section className='projects panal sticky-top' id='projects' ref={sectionRef}>
//         <div className='container-md container-fluid py-5'>
//           <div className="py-5 px-lg-5 px-4 d-flex flex-column gap-5">
//             <div className='projects-head'>
//               <h2 className='light-green fw-bold fs-1'>FEATURED PROJECTS</h2>
//               <p className='text-secondary'>Selected Works</p>
//             </div>
//             <div className=' projects-down row gap-4'>
//               <div className='row pro-1 d-flex text-white'>
//                 <div className='col-md-4 lh-1'>
//                   <p className='text-secondary'>01</p>
//                   <p>FIBER CABLE DIRECT</p>
//                 </div>
//                 <div className='col-md-8 border-bottom d-flex justify-content-between gap-4'>
//                   <h2 className=''>javaScript E-commerce Website</h2>
//                   <a href="https://cheery-daffodil-52be00.netlify.app/" target='_blank' className='light-green text-decoration-none d-flex align-items-center View-Project-1'><span>View Project</span> <i class="fa-solid fa-arrow-right-long ms-2"></i></a>
//                 </div>
//               </div>

//               <div className='row pro-1 d-flex text-white'>
//                 <div className='col-md-4 lh-1'>
//                   <p className='text-secondary'>02</p>
//                   <p>Painter</p>
//                 </div>
//                 <div className='col-md-8 border-bottom d-flex justify-content-between gap-4'>
//                   <h2 className=''>ReactJS E-commerce Website</h2>
//                   <a href="https://painterecomweb.vercel.app/" target='_blank' className='light-green text-decoration-none d-flex align-items-center'><span>View Project</span> <i class="fa-solid fa-arrow-right-long ms-2"></i></a>
//                 </div>
//               </div>

//               <div className='row pro-1 d-flex text-white'>
//                 <div className='col-md-4 lh-1'>
//                   <p className='text-secondary'>03</p>
//                   <p> Job Fillter</p>
//                 </div>
//                 <div className='col-md-8 border-bottom d-flex justify-content-between gap-4'>
//                   <h2 className=''>Responsive HTML, CSS Website</h2>
//                   <a href="https://jobfillter.netlify.app/" target='_blank' className='light-green text-decoration-none d-flex align-items-center'><span>View Project</span> <i class="fa-solid fa-arrow-right-long ms-2"></i></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Projects




// import React, { useState, useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   { id: 'image1', title: 'FIBER CABLE DIRECT', description: 'JavaScript E-commerce Website', link: 'https://cheery-daffodil-52be00.netlify.app/', imgSrc: 'https://via.placeholder.com/300x200?text=Fiber+Cable+Direct' },
//   { id: 'image2', title: 'Painter', description: 'ReactJS E-commerce Website', link: 'https://painterecomweb.vercel.app/', imgSrc: 'https://via.placeholder.com/300x200?text=Painter' },
//   { id: 'image3', title: 'Job Filter', description: 'Responsive HTML, CSS Website', link: 'https://jobfillter.netlify.app/', imgSrc: 'https://via.placeholder.com/300x200?text=Job+Filter' },
// ];

// function Projects({ setNavbarColor }) {
//   const [hoveredImage, setHoveredImage] = useState(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     // Create ScrollTrigger for color change
//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top 40px",
//       end: "bottom 40px",
//       onEnter: () => setNavbarColor("#4ADE80"),
//       onLeaveBack: () => setNavbarColor("#333"),
//       onLeave: () => setNavbarColor("#333"),
//       onEnterBack: () => setNavbarColor("#4ADE80"),
//     });

//     // Cleanup ScrollTrigger instance on unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [setNavbarColor]);

//   return (
//     <>
//       <section className="projects panel sticky-top" id="projects" ref={sectionRef}>
//         <div className="container-md container-fluid py-5">
//           <div className="py-5 px-lg-5 px-4 d-flex flex-column gap-5">
//             <div className="projects-head">
//               <h2 className="light-green fw-bold fs-1">FEATURED PROJECTS</h2>
//               <p className="text-secondary">Selected Works</p>
//             </div>
//             <div className="projects-down row gap-4">
//               {projects.map((project) => (
//                 <div
//                   key={project.id}
//                   className="row pro-1 d-flex text-white"
//                   onMouseEnter={() => setHoveredImage(project.imgSrc)}
//                   onMouseLeave={() => setHoveredImage(null)}
//                 >
//                   <div className="col-md-4 lh-1">
//                     <p className="text-secondary">{project.id.slice(-1)}</p>
//                     <p>{project.title}</p>
//                   </div>
//                   <div className="col-md-8 border-bottom d-flex justify-content-between gap-4">
//                     <h2>{project.description}</h2>
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="light-green text-decoration-none d-flex align-items-center"
//                     >
//                       <span>View Project</span>{" "}
//                       <i className="fa-solid fa-arrow-right-long ms-2"></i>
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {hoveredImage && (
//           <div className="image-preview">
//             <img src={hoveredImage} alt="Project Preview" />
//           </div>
//         )}
//       </section>
//     </>
//   );
// }

// export default Projects;


import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTheme } from './ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 'image1', title: 'FIBER CABLE DIRECT', description: 'JavaScript E-commerce Website', link: 'https://cheery-daffodil-52be00.netlify.app/', imgSrc: 'src/assets/image.png' },
  { id: 'image2', title: 'Painter', description: 'ReactJS E-commerce Website', link: 'https://painterecomweb.vercel.app/', imgSrc: 'src/assets/Screenshot 2024-12-16 213847.png' },
  { id: 'image3', title: 'Job Filter', description: 'Responsive HTML, CSS Website', link: 'https://jobfillter.netlify.app/', imgSrc: 'src/assets/Screenshot 2024-12-16 213914.png' },
];

function Projects({ setNavbarColor}) {
  
  const { theme } = useTheme();


  const [hoveredImage, setHoveredImage] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);


  
  const themeColors = {
    green: "#4ADE80", 
    red: "#de6f4a",
    yellow: "#dec84a", 
  };

  useEffect(() => {



    // Create ScrollTrigger for color change
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 40px",
      end: "bottom 40px",
      onEnter: () => setNavbarColor(themeColors[theme]), // Use theme color or fallback
      onLeaveBack: () => setNavbarColor("#333"), // Default color when leaving back
      onLeave: () => setNavbarColor("#333"), // Default color when leaving
      onEnterBack: () => setNavbarColor(themeColors[theme])
    });

    // Cleanup ScrollTrigger instance on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setNavbarColor , theme]);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };




  return (
    <>
      <section
        className="projects panel "
        id="projects"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
      >
        <div className="container-md container-fluid py-5">
          <div className="py-5 px-lg-5 px-4 d-flex flex-column gap-5">
            <div className="projects-head">
              <h2 className={`light-${theme} fw-bold fs-1`}>FEATURED PROJECTS</h2>
              <p className="text-secondary">Selected Works</p>
            </div>
            <div className="projects-down row gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="row pro-1 d-flex text-white"
                  onMouseEnter={() => setHoveredImage(project.imgSrc)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="col-md-4 lh-1">
                    <p className="text-secondary">{project.id.slice(-1)}</p>
                    <p>{project.title}</p>
                  </div>
                  <div className="col-md-8 border-bottom d-flex justify-content-between gap-4">
                    <h2 className={`hover-light-${theme}`}>{project.description}</h2>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`light-${theme} text-decoration-none d-flex align-items-center`}
                    >
                      <span>View Project</span>{" "}
                      <i className="fa-solid fa-arrow-right-long ms-2"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {hoveredImage && (
          <div
            className="image-preview"
            style={{
              top: cursorPosition.y + 150 + "px",
              left: cursorPosition.x + 150 + "px",
            }}
          >
            <img src={hoveredImage} alt="Project Preview" />
          </div>
        )}
      </section>
    </>
  );
}

export default Projects;

