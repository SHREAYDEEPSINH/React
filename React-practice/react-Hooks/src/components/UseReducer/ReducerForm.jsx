import React, { useReducer, useState } from 'react'

let initial = {
    name: "",
    age: "",
    mobile: "",
    email: ""
}

function reducerFunction(prev, next) {
    return {...prev , ...next}
}

function ReducerForm() {
    let [form, setForm] = useReducer(reducerFunction, initial)

    function nameHandler(e) {
        setForm({ name: e.target.value })
    }
    function ageHandler(e) {
        setForm({ age: e.target.value })
    }
    function mobileHandler(e) {
        setForm({ mobile: e.target.value })
    }
    function emailHandler(e) {
        setForm({ email: e.target.value })
    }

    function formRender() {
        console.log(form, "form submitted")
    }


    return (
        <>
            <div className='container text-bg-danger py-3 text-center'>
                <h1>useReduser</h1>

                <input type="text" className='form-control mb-4' placeholder='Name' value={form.name} onInput={nameHandler} />
                <input type="number" className='form-control mb-4' placeholder='Age' value={form.age} onInput={ageHandler} />
                <input type="tel" className='form-control mb-4' placeholder='Mobile' value={form.mobile} onInput={mobileHandler} />
                <input type="email" className='form-control mb-4' placeholder='Email' value={form.email} onInput={emailHandler} />

                <button className='btn btn-success' onClick={formRender}>submit</button>
            </div>
        </>
    )
}

export default ReducerForm