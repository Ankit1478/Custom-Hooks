import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function useTodo(n){
  const[todos , setTodo] = useState([]);
  const[loading , setLoading] = useState(true);

  useEffect(()=>{
    const value =setInterval(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
    .then(res=>{
      setTodo(res.data.todos);
      setLoading(false);
    })
    },n*1000)
     axios.get("https://sum-server.100xdevs.com/todos")
    .then(res=>{
      setTodo(res.data.todos);
      setLoading(false);
    })

    return()=>{
      clearInterval(value)
    }
  },[n])

 

  return {todos , loading};
}


function App() {
  const {todos ,loading}= useTodo(10);

  if (loading) {
    return <div>
      Loading...
    </div>
  }

  return <div> {todos.map(todo => <Todo todo={todo}></Todo>)}</div>
}

function Todo({todo}){
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App