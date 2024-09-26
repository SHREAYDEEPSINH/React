import React, { useContext } from 'react'
import counterContext from '../../context/Context'

function Navbar() {

    let value = useContext(counterContext)
    return (
        <>
            <header className='text-bg-dark'>
                <nav className='container d-flex justify-content-around py-3'>
                    <h3>Logo</h3>
                    <h4>Count : {value}</h4>
                </nav>
            </header>
        </>
    )
}

export default Navbar