import React, { useState } from 'react'

function Formpreview() {
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        address: "",
        phoneno: ""
    })
    function haldelFirstName(e) {
        setForm({
            ...form,
            firstname: e.target.value,
        })
    }
    function haldelLastName(e) {
        setForm({
            ...form,
            lastname: e.target.value,
        })
    }
    function haldelEmail(e) {
        setForm({
            ...form,
            email: e.target.value,
        })
    }
    function haldelPassword(e) {
        setForm({
            ...form,
            password: e.target.value,
        })
    }
    function haldelPhoneNo(e) {
        setForm({
            ...form,
            phoneno: e.target.value,
        })
    }
    function haldelAddress(e) {
        setForm({
            ...form,
            address: e.target.value,
        })
    }

    return (
        <>
            <h1 className='text-center my-3'>Form Data Preview</h1>
                <form onSubmit={e => e.preventDefault()} className=' border bg-primary bg-opacity-50 bg-gradient border-2 rounded-3 my-2 p-4 m-auto' style={{ width: "380px" }}>
                    <div className="mb-3">
                        <label className="form-label">Frist Name</label>
                        <input type="text" name='firstName' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={form.firstname} onChange={haldelFirstName} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" name='lastName' className="form-control" value={form.lastname} onChange={haldelLastName} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={form.email} onChange={haldelEmail} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={form.password} onChange={haldelPassword} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone No.</label>
                        <input type="number" className="form-control" value={form.phoneno} onChange={haldelPhoneNo} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label> <br />
                        <textarea value={form.address} onChange={haldelAddress} ></textarea>
                    </div>
                    <button type="submit" className="btn bg-light bg-gradient">Submit</button>
                </form>


                <table className="table w-25 m-auto table-primary table-striped" >
                    <tbody>
                        <tr>
                            <th>Name :</th>
                            <td>{form.firstname} {form.lastname}</td>
                        </tr>
                        <tr>
                            <th>Email :</th>
                            <td>{form.email}</td>
                        </tr>
                        <tr>
                            <th scope="row">Password :</th>
                            <td>{form.password}</td>
                        </tr>
                        <tr>
                            <th scope="row">Phone No :</th>
                            <td>{form.phoneno}</td>
                        </tr>
                        <tr>
                            <th scope="row">Address :</th>
                            <td>{form.address}</td>
                        </tr>
                    </tbody>
                </table>
        </>
    )
}

export default Formpreview