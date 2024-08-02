import React, { useState } from 'react'

function Formpreview() {
    const [form, setForm] = useState({
        firstname:"",
        lastname: "",
        email : "",
        password : "",
        address : ""
    })

    function haldelFirstName(e) {
        setForm({
           ...form,
           firstname : e.target.value,
        })
    }
    function haldelLastName(e) {
        setForm({
            ...form,
           lastname : e.target.value,
        })
    }
    function haldelEmail(e) {
        setForm({
            ...form,
            email : e.target.value,
        })
    }
    function haldelPassword(e) {
        setForm({
            ...form,
            password : e.target.value,
        })
    }
    function haldelAddress(e) {
        setForm({
            ...form,
            address : e.target.value,
        })
    }

    return (
        <div>
            <form onSubmit={e => e.preventDefault()} className='w-25 border bg-info bg-gradient border-2 rounded-3 my-2 p-4  m-auto'>
                <div className="mb-3">
                    <label className="form-label">Frist Name</label>
                    <input type="text" name='firstName' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={form.firstname} onChange={haldelFirstName} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" name='lastName' className="form-control"  value={form.lastname} onChange={haldelLastName} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"  value={form.email} onChange={haldelEmail} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={form.password} onChange={haldelPassword} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label> <br />
                    <textarea value={form.address} onChange={haldelAddress} ></textarea>
                </div>
                <button type="submit" className="btn bg-light bg-gradient">Submit</button>
            </form>

            <div className='text-center'>
                <h4>Name :{form.firstname} {form.lastname} </h4>
                <h4>Email : {form.email} </h4>
                <h4>Password : {form.password} </h4>
                <h4>Address : {form.address} </h4>
            </div>
        </div>
    )
}

export default Formpreview