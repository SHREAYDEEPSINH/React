
import './App.css'
import Localstorage from './Components/Localstorage'
import Todolist from './Components/todolist'

function App() {

  return (
    <div className='row'>
      <div className='col-6'>
        <Localstorage />
      </div>
      <div className='col-6'>
        <Todolist />
      </div>
    </div>
  )
}

export default App
