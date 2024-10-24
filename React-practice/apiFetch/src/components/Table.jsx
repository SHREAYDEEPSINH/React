import React, { useEffect, useState } from 'react'

function Table() {
    let [list, setList] = useState([])

    let [page, setPage] = useState(1)


    useEffect(() => {

        async function data() {

            let api = await fetch("https://jsonplaceholder.typicode.com/posts")
            let data = await api.json()
            setList(data)

        }
        data()

    }, [])


    let filterData = list.filter((ele) => ele.userId == page)
    console.log(filterData);


    let finalData = filterData.map((ele) =>

    (
        <tbody key={ele.id}>
            <tr>
                <th >{ele.id}</th>
                <td>{ele.title}</td>
                <td>{ele.userId}</td>
                <td>{ele.body}</td>
            </tr>
        </tbody>
    )
    )

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>UserId</th>
                        <th>Handle</th>
                    </tr>
                </thead>
                {finalData}
            </table>
            <button className='btn btn-success' onClick={() => setPage(page - 1)}>pre</button>
            <button onClick={() => setPage(1)}>1</button>
            <button onClick={() => setPage(2)}>2</button>
            <button onClick={() => setPage(3)}>3</button>
            <button className='btn btn-success' onClick={() => setPage(page + 1)}>next</button>
        </div>
    )
}

export default Table