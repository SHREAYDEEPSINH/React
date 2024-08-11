import React from 'react'

function Mode() {

    // let [mode, setMode] = useState("dark")

    function darkHendler() {
        setMode("dark")
    }
    function lightHendler() {
        setMode("light")
    }

    return (
        <>
            {/* {mode} */}
            <button type="button" className="btn btn-dark me-2" onClick={darkHendler}>Dark</button>
            <button type="button" className="btn btn-light border border-2" onClick={lightHendler}>Light</button>
        </>
    )
}

export default Mode