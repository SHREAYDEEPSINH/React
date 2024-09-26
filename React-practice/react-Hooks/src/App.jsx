
import { useContext, useState } from 'react'
import './App.css'
import CounterCallback from './components/UseCallback/CounterCallback'
import MarksComonent from './components/UseMemo/MarksComonent'
import NameComonent from './components/UseMemo/NameComonent'
import Student from './components/UseMemo/Student'
import counterContext from './context/Context'
import Navbar from './components/UseContext/Navbar'
import ReducerForm from './components/UseReducer/ReducerForm'

function App() {
  // let [count, setCount] = useState(1)


  return (
    <>
      {/* ReducerForm  */}
      <ReducerForm />



      {/* useContext  */}

      {/* <counterContext.Provider value={count}>
        <Navbar/>
        <div className='text-bg-danger text-center p-4'>
          <h2>Count : {count}</h2>
          <button className='btn btn-success' onClick={() => setCount(count + 1)}>+</button>
        </div>
      </counterContext.Provider> */}




      {/* useMemo  */}

      {/* <div className='container text-bg-success text-center py-3'>
        <NameComonent name="shreaydeepsinh" />
        <MarksComonent marks={80}/>
      </div>
      <div className='container text-bg-danger text-center py-3'>
        <Student name={"Shreaydeepsinh"} marks={80} subject={"Gujarati"}/>
      </div> */}




      {/* useCallback  */}

      {/* <div className='container text-bg-success text-center py-3'>
        <CounterCallback/>
      </div> */}



    </>
  )
}

export default App
