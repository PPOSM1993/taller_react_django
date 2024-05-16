
import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';


function App() {

  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/todos/')
    .then(({ data }) => {
      //console.log('data?', data)
      setTodos(_todos => {
        return data;
      })
    }
  )}, []);

  const handleChangeTodo = (event) => {
    event.preventDefault();
    setNewTodo(event.target.value)
  }

  const createTodo = (event) => {
    event.preventDefault()
    axios.post('http://localhost:8000/api/todos/', {
      title: newTodo
    })
    .then(({data}) => {
      setTodos(_todos => {
        return [data, ..._todos]
      })
      setNewTodo('')
    })
  }

  const deleteTodo = (todo) => {
    axios.delete(`http://localhost:8000/api/todo/${todo.id}/`)
      .then(() => {
        setTodos(_todos => {
          return _todos.filter(t => t.id !== todo.id)
        })
      })
  }

  return (
    <>
      <div className='container'>
        <div className="card mx-auto">
          <h1 className='text-uppercase'>Todo List APP</h1>
          <hr />
          <div className="container">
            <form action="" className='mt-5 mb-3' onSubmit={createTodo}>
              <div className="input-group">
                <input type="text" 
                       className='form-control form-control-sm' 
                       placeholder='Ingrese Nueva Tarea' 
                       onChange={handleChangeTodo}
                       value={newTodo}
                />
                <br />
                <button className = 'btn btn-success btn-md'> Crear Tarea </button>
              </div>
            </form>
          </div>
          <hr />
          <div className="card-body text-start">
            {
              todos.map(todo => (
                <div key={todo.id} className='d-flex gap-1 justify-content-between align-items-center'>
                  <div>
                  <input type="checkbox" name="" id="" />
                  </div>
                  <div className='text-start'>
                  {todo.title}
                  </div>
                  <br />
                  <br />
                  <a href="#" className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo)}>
                    Eliminar
                  </a>

                </div>
                
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
