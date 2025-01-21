import React from 'react'

function Skillspage() {
    return (
        <>
            <section>
                <div className='container-md container-fluid'>
                    <div className='pageHeading'>
                        <h2>SKILLS.</h2>
                    </div>
                </div>
            </section>
            <section className='skillpage-main d-flex justify-content-between '>
                <div className='container-md container-fluid'>
                    <div className='row justify-content-between gap-4 gap-sm-0'>
                        <div className='col-sm-6 d-flex flex-column gap-4'>
                            <div>
                                <h4>HTML</h4>
                                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-success" style={{ width: "90%" }}>90%</div>
                                </div>
                            </div>
                            <div>
                                <h4>CSS</h4>
                                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-success" style={{ width: "85%" }}>85%</div>
                                </div>
                            </div>
                            <div>
                                <h4>Bootstrap</h4>
                                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-success" style={{ width: "85%" }}>85%</div>
                                </div>
                            </div>
                            <div>
                                <h4>Javascript</h4>
                                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-success" style={{ width: "80%" }}>80%</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 d-flex flex-column gap-4 '>
                            <div>
                                <h4>React js</h4>
                                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-success" style={{ width: "82%" }}>82%</div>
                                </div>
                            </div>
                            <div>
                                <h4>Node js</h4>
                                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-success" style={{ width: "75%" }}>75%</div>
                                </div>
                            </div>
                            <div>
                                <h4>MongoDB</h4>
                                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-success" style={{ width: "80%" }}>80%</div>
                                </div>
                            </div>
                            <div>
                                <h4>Express js</h4>
                                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-success" style={{ width: "75%" }}>75%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skillspage