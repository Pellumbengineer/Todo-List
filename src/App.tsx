import { Center } from '@chakra-ui/layout'
import { VStack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import AddToList from './components/AddToList'
import Todo from './components/Todo'
import { ChakraProvider } from '@chakra-ui/react'

export interface IState {
  todoList: {
    category: string
    title: string
    description?: string
  }[]
}

function App(): JSX.Element {
  const [todoList, setTodoList] = useState<IState['todoList']>([
    {
      category: 'SW',
      title: 'Patterns in SW',
      description: 'Do ti today!',
    },
    {
      category: 'ML',
      title: 'Deep Learning',
      description: 'You have to finish this by next week',
    },
  ])

  return (
    <ChakraProvider>
      <Center>
        <VStack>
          <header>
            <h2>Learn TypeScripts by building todo list</h2>{' '}
          </header>

          <Todo todoList={todoList} setTodoList={setTodoList} />
          <AddToList todoList={todoList} setTodoList={setTodoList} />
        </VStack>
      </Center>
    </ChakraProvider>
  )
}

export default App
