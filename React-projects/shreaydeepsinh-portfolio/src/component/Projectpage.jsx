


import { Link } from 'react-router-dom';


function Projectpage() {



    const projects = [
        {
            imageSrc: "src/assets/Screenshot 2025-03-13 164003.png",
            title: "Cafeu",
            link: 'https://cafeu-e-com-frontend.vercel.app/',
            description: "Cafeu Full stack website",
            tech: "HTML, CSS, JavaScript, Bootstrap, React.js,Node.js, Express.js, MongoDB"
        },
        {
            imageSrc: "image.png",
            title: "FIBER CABLE DIRECT",
            link: 'https://cheery-daffodil-52be00.netlify.app/',
            description: "JavaScript E-commerce Website",
            tech: " HTML, CSS, JavaScript, Bootstrap "

        },
        {
            imageSrc: "Screenshot 2024-12-16 213847.png",
            title: "Painter",
            link: 'https://painterecomweb.vercel.app/',
            description: "ReactJS E-commerce Website",
            tech: "HTML, CSS, JavaScript, Bootstrap, React.js"

        },
        {
            imageSrc: "Screenshot 2024-12-16 213914.png",
            title: "Job Filter",
            link: 'https://jobfillter.netlify.app/',
            description: "Responsive HTML, CSS Website",
            tech: "HTML, CSS, Bootstrap"

        },



    ];



    return (
        <>
            <section>
                <div className='pageHeading'>
                    <h2>PROJECTS.</h2>
                </div>
            </section>

            <section className='projectpage-main d-flex justify-content-center align-items-center'>
                <div className='container-md container-fluid w-100'>
                    <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
                        {projects.map((project, index) =>
                           
                            <div key={index} className="col">
                                <div className="card border-0 project-card">
                                    <Link to={project.link}>
                                        <img src={project.imageSrc} className=" card-img-top rounded-5 project-image" alt="..." />
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="card-title mb-1 mt-2">{project.title}</h5>
                                        <p className="card-text mb-1 fw-bold">{project.description.toLocaleUpperCase()}.</p>
                                        <h6 className="card-text ">Tech : {project.tech}</h6>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projectpage;






