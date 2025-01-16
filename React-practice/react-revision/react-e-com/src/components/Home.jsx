import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {

  let [data, setData] = useState([])

  // useEffect(() => {
  //   let apiFetchFunction = async () => {
  //     let api = await fetch("https://dummyjson.com/products")
  //     let apidata = await api.json()
  //     console.log(apidata)
  //   }
  //   apiFetchFunction()
  // }, [])

  useEffect(() => {
    axios.get("https://dummyjson.com/carts")
      .then((res) => {
        console.log(res.data.carts, "axios")
        setData(res.data.carts)
      })
  }, [])

  console.log(data, "data")


  return (
    <>
      <div>
        {data.map((ele) => (
          <div>
            <h1>{ele.id}</h1>
            <div style={{display: "flex"}}>
              {ele.products.map((products)=>(
                <div >
                  <h1>{products.id}</h1>
                  <h1>{products.title}</h1>
                  <img src={products.thumbnail} alt="" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home