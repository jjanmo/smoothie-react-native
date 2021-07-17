import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: #c8cfd9;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  border-radius: 5px;
  padding: 10px 5px;
  margin: 5px auto;
`;
const TodoText = styled.Text`
  font-size: 16px;
  flex: 1;
  padding-left: 15px;
`;
const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const Todo = ({title, done}) => {
  return (
    <Container>
      <TodoText textDecorationLine={done ? 'line-through' : 'none'}>
        {title}
      </TodoText>
      <ButtonContainer>
        <Button bgColor={'#a9b3ff'} text={'done'} />
        <Button bgColor={'tomato'} text={'del'} />
      </ButtonContainer>
    </Container>
  );
};

export default Todo;
