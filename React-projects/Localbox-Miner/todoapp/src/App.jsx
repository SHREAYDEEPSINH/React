import Todolist from "./Components/Todolist"
import TodoLocalstorage from "./Components/TodoLocalstorage"
import './App.css'


function App() {

  return (
    <div className="container row m-auto pt-5">
      <div className="col-6">
        <Todolist />
      </div>
      <div className="col-6">
        <TodoLocalstorage />
      </div>

    </div>
  )
}

export default App
