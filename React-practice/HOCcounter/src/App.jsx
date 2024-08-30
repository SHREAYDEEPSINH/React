
import './App.css'
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter'

function App() {

  return (
    <>
      <div className='text-center bg-black text-white p-5' >
        <h1 className='mb-5'>HOC - higher Order Component</h1>
        <div className="row">
          <div className='col'>
            <ClickCounter />
          </div>
          <div className="col">
            <HoverCounter />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
