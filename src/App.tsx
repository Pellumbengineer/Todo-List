import { Box } from '@chakra-ui/layout'
import { VStack } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/layout'
import React, { useState } from 'react'
import './App.css'
import Todo from './components/Todo'

interface IState {
  todoList: {
    category: string
    title: string
    description?: string
  }[]
}

function App() {
  const [todoList, setTodoList] = useState<IState['todoList']>([
    {
      category: 'sw',
      title: 'title1',
      description: 'asdasasdfasdfasdfasdfasafd',
    },
    {
      category: 'sw',
      title: 'title2',
    },
  ])

  return (
    <VStack>
      <header>
        <h2>Learn TypeScripts by building todo list</h2>{' '}
      </header>
      <Container maxW='container.xl'>
        <Todo todoList={todoList} />
      </Container>
    </VStack>
  )
}

export default App
