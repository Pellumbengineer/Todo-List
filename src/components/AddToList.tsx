import React, { useState } from 'react'

import { Input, Button, Textarea, Stack } from '@chakra-ui/react'

import { IState as Props } from '../App'

interface IProps {
  todoList: Props['todoList']
  setTodoList: React.Dispatch<React.SetStateAction<Props['todoList']>>
}

const AddToList: React.FC<IProps> = ({ todoList, setTodoList }) => {
  const [input, setInput] = useState({
    category: '',
    title: '',
    description: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    })
  }

  const handleClick = (): void => {
    if (!input.category || !input.title) {
      return
    }

    setTodoList([
      ...todoList,
      {
        category: input.category,
        title: input.title,
        description: input.description,
      },
    ])
    setInput({
      category: '',
      title: '',
      description: '',
    })
  }

  return (
    <Stack spacing={3}>
      <Input
        focusBorderColor='lime'
        variant='outline'
        id='category'
        placeholder='category'
        value={input.category}
        onChange={handleChange}
      />
      <Input
        variant='outline'
        id='title'
        placeholder='title'
        value={input.title}
        onChange={handleChange}
      />
      <Textarea
        variant='outline'
        id='description'
        placeholder='description'
        value={input.description}
        onChange={handleChange}
      />
      <Button type='submit' onClick={handleClick} colorScheme='green'>
        Add
      </Button>
    </Stack>
  )
}

export default AddToList
