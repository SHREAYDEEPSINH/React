
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTheme } from './ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 'image1', title: 'FIBER CABLE DIRECT', description: 'JavaScript E-commerce Website', link: 'https://cheery-daffodil-52be00.netlify.app/', imgSrc: '/image.png' },
  { id: 'image2', title: 'Painter', description: 'ReactJS E-commerce Website', link: 'https://painterecomweb.vercel.app/', imgSrc: '/Screenshot 2024-12-16 213847.png' },
  { id: 'image3', title: 'Job Filter', description: 'Responsive HTML, CSS Website', link: 'https://jobfillter.netlify.app/', imgSrc: '/Screenshot 2024-12-16 213914.png' },
];

function Projects({ setNavbarColor }) {

  const { theme } = useTheme();


  const [hoveredImage, setHoveredImage] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);



  const themeColors = {
    green: "#4ADE80",
    red: "#de6f4a",
    yellow: "#dec84a",
  };

  // useEffect(() => {

  //   // Create ScrollTrigger for color change
  //   ScrollTrigger.create({
  //     trigger: sectionRef.current,
  //     start: "top 40px",
  //     end: "bottom 40px",
  //     onEnter: () => setNavbarColor(themeColors[theme]), // Use theme color or fallback
  //     onLeaveBack: () => setNavbarColor("#333"), // Default color when leaving back
  //     onLeave: () => setNavbarColor("#333"), // Default color when leaving
  //     onEnterBack: () => setNavbarColor(themeColors[theme])
  //   });

  //   // Cleanup ScrollTrigger instance on unmount
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, [setNavbarColor , theme]);

  // const handleMouseMove = (e) => {
  //   setCursorPosition({ x: e.clientX, y: e.clientY });
  // };


  useEffect(() => {
    if (typeof window !== "undefined" && sectionRef.current) {
      import("gsap/ScrollTrigger").then((module) => {
        const ScrollTrigger = module.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 40px",
          end: "bottom 40px",
          onEnter: () => setNavbarColor(themeColors[theme]),
          onLeaveBack: () => setNavbarColor("#333"),
          onLeave: () => setNavbarColor("#333"),
          onEnterBack: () => setNavbarColor(themeColors[theme]),
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setNavbarColor, theme]);




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
                      <span>View Project</span>
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

