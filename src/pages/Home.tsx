import axios from 'axios';
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList';

const url = "https://6402fe07f61d96ac4874ce6b.mockapi.io/todos"


const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([])
  
const getTodos = async () =>{
  try {
    const {data} = await axios.get<TodoType[]>(url)
    setTodos(data)
  } catch (error) {
    console.log(error);
  }
}

const addTodo:AddFn = async (text) => {
  const newTodo = {
    task: text,
    isDone:false
  }
try {
  await axios.post(url,newTodo)
  getTodos()
} catch (error) {
  console.log(error);
}
}

const toggleTodo:ToggleFn = async (item)=> {
try {
  await axios.put(`${url}/${item.id}`, {...item,isDone:!item.isDone})
  getTodos()
  } catch (error) {
  console.log(error);
}
}

const deleteTodo:DeleteFn = async (id)=> {
  try {
    await axios.delete(`${url}/${id}`)
    getTodos()
  } catch (error) {
  console.log(error);
  }
}

useEffect(() => {
  getTodos()
  
}, [])

  return (
    <div className='main'>
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default Home