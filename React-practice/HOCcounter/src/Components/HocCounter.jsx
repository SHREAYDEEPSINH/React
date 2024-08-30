import React, { useState } from 'react'

function HocCounter(WrappedComponent, incrementedby) {
    return function EnhancedComponent(props) {
        let [count, setCount] = useState(0)

        return (
            <>
                <WrappedComponent
                    {...props}
                    count={count}
                    incrimentCount={() => setCount(count + 1)}
                />
            </>
        )
    }
}

export default HocCounter