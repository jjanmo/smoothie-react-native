import React, {useState} from 'react';
import styled from 'styled-components/native';
import Header from '../components/Header';
import TodoList from '../components/TodoList';

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #2d343a;
`;
const TodoListContainer = styled.View`
  flex: 1;
`;

const TodoListScreen = () => {
  const [todos, setTodos] = useState([]);

  return (
    <Wrapper>
      <Header todos={todos} />
      <TodoListContainer>
        <TodoList todos={todos} updateFunction={setTodos} />
      </TodoListContainer>
    </Wrapper>
  );
};

export default TodoListScreen;
