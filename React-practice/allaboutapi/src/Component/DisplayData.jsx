import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function DisplayData() {
  let [data, setData] = useState([])
  const [record, setRecord] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:4040/users`)
      .then((res) => {
        setData(Object.keys(res.data[0]))
        setRecord(res.data)
      })
      .catch((err) => console.log("Bad request"))
  }, []);

  function deletHandler(id) {
    axios
      .delete(`http://localhost:4040/users/${id}`)
      .then((res) => {
        console.log(res.data)
        axios.get(`http://localhost:4040/users`)
        .then((res) => {
          setRecord(res.data)
        }
        )
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className="container">
        <div className="text-end my-3"><Link to="/add" className="btn btn-info">Add</Link></div>
        <table className="table table-dark">
          <thead>
            <tr>
              {data.map((ele, ind) => (
                <th key={ind}>{ele}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {record.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>
                    <button className="btn btn-success me-2" onClick={() => deletHandler(ele.id)}>Delete</button>
                    <Link to={`/update/${ele.id}`} className="btn btn-success me-2">Update</Link>
                  </td>
                </tr>

              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DisplayData;
