import React from 'react'


function Productprops(props) {
    return (
        <div>
            <h1 className='text-center py-3 bg-gradient bg-success bg-opacity-100 m-0'>{props.name}</h1>
            <ul className='list-unstyled  d-flex flex-wrap gap-2 justify-content-center py-4 m-0' >
                {props.call}
            </ul>
        </div>
    )
}

export default Productprops