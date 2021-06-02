import React from 'react'
import {
  Grid,
  Container,
  Box,
  useColorModeValue,
  Center,
  List,
} from '@chakra-ui/react'

interface IProps {
  todoList: {
    category: string
    title: string
    description?: string
  }[]
}

const Todo: React.FC<IProps> = ({ todoList }) => {
  const backgroundColor = useColorModeValue('white', 'gray.800')

  const renderList = (): JSX.Element[] => {
    return todoList.map((todo) => {
      return (
        <Container maxW='container.xl'>
          <List bg={backgroundColor} gap={6}>
            <Box
              borderRadius='lg'
              borderWidth='1px'
              maxW='sm'
              overflow='hidden'
            >
              <Grid templateColumns='repeat(3, 1fr)' p='10' gap={10}>
                <Box gap={5}>
                  <Box
                    as='h4'
                    fontWeight='semibold'
                    isTruncated
                    lineHeight='tight'
                    mt='1'
                    color='green'
                  >
                    Category
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
                  <h4>
                    {todo.description ? (
                      <Box mt='1' lineHeight='tight' isTruncated>
                        {todo.description}
                      </Box>
                    ) : (
                      <Box></Box>
                    )}
                  </h4>
                </Box>
              </Grid>
            </Box>
          </List>
        </Container>
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
