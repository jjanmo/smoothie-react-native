import React, {useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import CircleButton from '../components/CircleButton';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import {data} from '../utils/dummy';

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #2d343a;
`;
const HeaderContainer = styled.View`
  flex: 1;
`;
const TodoListContainer = styled.View`
  flex: 4;
  justify-content: center;
  align-items: center;
`;
const FooterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TodoListScreen = () => {
  const [todos, setTodos] = useState(data);
  console.log('⭐️', todos);
  return (
    <Wrapper>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <TodoListContainer>
        <TodoList todos={todos} updateFunction={setTodos} />
      </TodoListContainer>
      <FooterContainer>
        <CircleButton text={'+'} />
      </FooterContainer>
    </Wrapper>
  );
};

export default TodoListScreen;
