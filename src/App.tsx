import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

interface IState {
  todoList: {
    name: string
    todo: string
    url: string
    description?: string
  }[]
}

function App() {
  const [todoList, setTodoList] = useState<IState['todoList']>([])

  todoList.map((todo) => {
    todo.description = ''
  })

  return (
    <div className='App'>
      <h1> Learn TypeScripts by building todo list </h1>
    </div>
  )
}

export default App
