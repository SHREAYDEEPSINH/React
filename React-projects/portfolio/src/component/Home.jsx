import React from 'react'

function Home({bgthemelight}) {
    return (
        <>
            <section className='home panel sticky-top' id='home'>
                <div className='container-md container-fluid'>
                    <div className='home-inner d-flex flex-column justify-content-center align-items-center'>
                        <div>
                            <div className={`d-inline-block ${bgthemelight} py-1 px-3 rounded-4`}>Available for  work</div>
                            <h1 className='my-3'>Hi, I'm Shreaydeepsinh Vaghela</h1>
                            <h3 >I build Creative and Morden websites</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home