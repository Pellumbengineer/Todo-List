import React, { useState } from 'react'
import './App.css'
import List from './components/List'

interface IState {
  todoList: {
    category: string
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
      <List todoList={todoList} />
    </div>
  )
}

export default App
