import React from 'react'
import { IState as Props } from '../App'
import {
  Grid,
  Container,
  Box,
  Text,
  useColorModeValue,
  Center,
  List,
  Button,
  Stack,
  VStack,
} from '@chakra-ui/react'

interface IProps {
  todoList: Props['todoList']
  setTodoList: React.Dispatch<React.SetStateAction<Props['todoList']>>
}

const Todo: React.FC<IProps> = ({ todoList, setTodoList }) => {
  const backgroundColor = useColorModeValue('white', 'gray.800')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTodoList = todoList.filter(
      (todo) => todo.title !== e.currentTarget.name
    )

    setTodoList(newTodoList)
  }

  const renderList = (): JSX.Element[] => {
    return todoList.map((todo) => {
      return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' bg={backgroundColor}>
          <Stack>
            <Box
              borderRadius='xl'
              borderWidth='1px'
              maxW='sm'
              overflow='hidden'
              bg={backgroundColor}
            >
              <Grid
                templateColumns='repeat(3, 1fr)'
                p='10'
                gap={2}
                overflowX='auto'
                bg={backgroundColor}
              >
                <Box gap={5}>
                  <Box
                    as='h4'
                    fontWeight='semibold'
                    isTruncated
                    lineHeight='tight'
                    mt='1'
                    color='green'
                  >
                    <Text> Category</Text>
                  </Box>
                  <h4>{todo.category}</h4>
                </Box>
                <Box gap={5}>
                  <Box
                    as='h4'
                    fontWeight='semibold'
                    isTruncated
                    lineHeight='tight'
                    mt='1'
                    color='green'
                  >
                    Title
                  </Box>
                  <h4>{todo.title}</h4>
                </Box>
                <Box gap={5}>
                  {todo.description ? (
                    <>
                      <Box
                        as='h4'
                        fontWeight='semibold'
                        isTruncated
                        lineHeight='tight'
                        mt='1'
                        color='green'
                      >
                        Description
                      </Box>
                      <h4>{todo.description}</h4>
                    </>
                  ) : (
                    <Box></Box>
                  )}
                </Box>
              </Grid>
            </Box>
            <Button colorScheme='red' onClick={handleClick} name={todo.title}>
              Delete
            </Button>
          </Stack>
        </Box>
      )
    })
  }

  return (
    <Center>
      <ul>{renderList()}</ul>
    </Center>
  )
}

export default Todo
