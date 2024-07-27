import React from 'react'
import Gradesystem from './Gradesystem'

import ProductCondition from './ProductCondition'

function Coditional() {
    // const usermarks= prompt("Enter Your Marks Between 0 to 100")
    const user= prompt ("Enter catagory men or women")
   


    return (
        <div className='d-flex flex-column'>
            {/* <Gradesystem marks={usermarks}/> */}
            <ProductCondition catagory={user}/>
        </div>
        
    )
}

export default Coditional