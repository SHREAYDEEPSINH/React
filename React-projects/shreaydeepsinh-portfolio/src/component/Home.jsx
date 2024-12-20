import React from 'react'
import { useTheme } from './ThemeContext';


function Home() {
      const { toggleTheme,theme } = useTheme();
    return (
        <>
            <section className='home panel sticky-top d-flex justify-content-end align-items-center' id='home'>
                <div className='container-md container-fluid'>
                    <div className='home-inner d-flex flex-column justify-content-center align-items-center'>
                        <div>
                            <div className={`d-inline-block bg-light-light-${theme}  py-1 px-3 rounded-4`}>Available for  work</div>
                            <h1 className='my-3'>Hi, I'm Shreaydeepsinh Vaghela</h1>
                            <h3 >I build Creative and Morden websites</h3>
                        </div>
                    </div>
                </div>
                <div className={`bg-light-${theme} rounded-start-4`} onClick={toggleTheme}>
                    <img width={"50px"}  src="https://static.thenounproject.com/png/4676033-200.png" alt="" />
                </div>
            </section>
        </>
    )
}

export default Home