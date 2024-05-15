
import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import { FaBeer } from "react-icons/fa";


function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/todos/')
    .then(({ data }) => {
      //console.log('data?', data)
      setTodos(_todos => {
        return data;
      })
    }
  )});

  return (
    <>
      <div className='container'>
        <div className="card mx-auto">
          <h1 className='text-uppercase'>Todo List APP</h1>
          <hr />
          <div className="container">
            <form action="" className='mt-5 mb-3'>
              <div className="input-group">
                <input type="text" className='form-control form/control-sm' placeholder='Ingrese Nueva Tarea'/>
                <br />
                <button className='btn btn-success btn-md'> Crear Tarea </button>
              </div>
            </form>
          </div>
          <hr />
          <div className="card-body">
            {
              todos.map(todo => (
                <div key={todo.id}>{todo.title}</div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
