import axios from 'axios';
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList';

const url = "https://6402fe07f61d96ac4874ce6b.mockapi.io/todos"

interface Todotype {
id:string | number;
task:string;
isDone:boolean;
}

const Home = () => {
  const [todos, setTodos] = useState<Todotype[]>([])
  
const getTodos = async () =>{
  try {
    const {data} = await axios.get<Todotype[]>(url)
    setTodos(data)
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  getTodos()
  
}, [])

  return (
    <div className='main'>
      <InputForm  />
      <TodoList todos={todos}/>
    </div>
  )
}

export default Home