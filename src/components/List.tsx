import React from 'react'

interface IProps {
  todoList: {
    category: string
    todo: string
    url: string
    description?: string
  }[]
}

const List: React.FC<IProps> = () => {
  return <div>I am the list components</div>
}

export default List
