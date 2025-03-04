import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Projectpage() {
    const workContainerRef = useRef(null);
    const workBoxesRef = useRef([]);

    useGSAP(() => {
        let translateX;

        // Calculate the horizontal scroll width dynamically
        function setTranslateX() {
            if (workContainerRef.current && workBoxesRef.current.length) {
                const box = workBoxesRef.current;
                console.log(box ,"box")
                const rect = box[0].getBoundingClientRect();
                console.log(rect , "rect")
                const parentWidth = workContainerRef.current.getBoundingClientRect().width;
                console.log(parentWidth ,"parantWidth")
                translateX = rect.width * box.length - parentWidth + 250;
                console.log(translateX , "translateX")
            }
        }

        setTranslateX();  // Calculate the translateX when the component is mounted

        // GSAP timeline for scroll trigger
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".work-section",  // Trigger scroll when the section is in view
                start: "center center",  // Start pinning when the top of the section reaches the top of the viewport
                end: `+=${translateX}`,  // End scroll once the horizontal scroll is complete
                scrub: true,  // Smooth scrolling
                pin: true,  // Pin the section
                pinType: "fixed",  // Pin using fixed positioning during the scroll
                id: "work",
            },
        });

        // Move the work-flex horizontally based on scroll
        timeline.to(".work-flex", {
            x: -translateX,  // Move the work-flex to the left
            duration: 1000,  // Optional, depending on your preference for speed
            delay: 1.2,
        });

        // Cleanup function to kill ScrollTrigger instance on unmount
        // return () => {
            // ScrollTrigger.getById("work").kill();
        // };
    }, []);


    const projects = [
        {
            imageSrc: "image.png",
            title: "FIBER CABLE DIRECT",
            link: 'https://cheery-daffodil-52be00.netlify.app/',
            description: "JavaScript E-commerce Website"
        },
        {
            imageSrc: "Screenshot 2024-12-16 213847.png",
            title: "Painter",
            link: 'https://painterecomweb.vercel.app/',
            description: "ReactJS E-commerce Website"
        },
        {
            imageSrc: "Screenshot 2024-12-16 213914.png",
            title: "Job Filter",
            link: 'https://jobfillter.netlify.app/',
            description: "Responsive HTML, CSS Website"
        },
       
    ];
    


    return (
        <>
            <section>
                <div className='pageHeading'>
                    <h2>PROJECTS.</h2>
                </div>
            </section>

            <section className='projectpage-main work-section' id='work'>
                <div className='container-md container-fluid work-container' ref={workContainerRef}>
                    <div className="d-flex my-5 py-5 justify-content-center align-items-center  project-card-main work-flex ">
                        {/* Loop through 15 projects */}
                        {projects.map((project, index) => (
                          <div key={index} className="work-box" ref={(el) => (workBoxesRef.current[index] = el)}>
                          <div className="card project-card border-0 rounded-4">
                            <Link className='image-height' to={project.link} target='_blank'> 
                            <img
                              src={`src/assets/${project.imageSrc}`}
                              className="card-img-top h-100 object-fit-fill"
                              alt={project.title}
                            />
                            </Link>
                             <div className="card-body d-flex flex-column justify-content-center">
                                 <h4 className="card-title fw-bold">{project.title}</h4>
                                 <p className="card-text">{project.description}</p>
                             </div>
                        </div>
                    </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projectpage;





// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// function Projectpage() {


//     return (
//         <>
//             <section>
//                 <div className='pageHeading'>
//                     <h2>PROJECTS.</h2>
//                 </div>
//             </section>

//             <section className='projectpage-main work-section' id='work'>
//                 <div className='container-md container-fluid work-container' >
//                     <div className="d-flex my-5 py-5 justify-content-center align-items-center  project-card-main work-flex ">
                        
//                             <div  className="work-box" >
//                                 <div className="card project-card border-0 rounded-4">
//                                     <img
//                                         src={``}
//                                         className="card-img-top h-75 object-fit-fill"
//                                         alt={``}
//                                     />
//                                     <div className="card-body">
//                                         <h5 className="card-title">Card title</h5>
//                                         <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Projectpage;



