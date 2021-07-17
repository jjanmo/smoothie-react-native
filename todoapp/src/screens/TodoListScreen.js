import React from 'react';
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
  return (
    <Wrapper>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <TodoListContainer data={data}>
        {data.length > 0 ? (
          <TodoList data={data} />
        ) : (
          <Text style={{color: 'white', fontSize: 16}}>
            하단에 '+' 버튼을 눌러 새로운 할일을 등록해 보세요.
          </Text>
        )}
      </TodoListContainer>
      <FooterContainer>
        <CircleButton text={'+'} />
      </FooterContainer>
    </Wrapper>
  );
};

export default TodoListScreen;
