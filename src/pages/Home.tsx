import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList';

const url = "https://6402fe07f61d96ac4874ce6b.mockapi.io/todos"

interface Todotype {
  
}
const Home = () => {
  const [todos, setTodos] = useState([])
  

  return (
    <div className='main'>
      <InputForm  />
      <TodoList />
    </div>
  )
}

export default Home