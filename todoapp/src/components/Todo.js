import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import {View} from 'react-native';

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
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
`;
const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const Todo = ({id, title, done, onPressDone, onPressDelete}) => {
  console.log('📌 todo', id, title, done);
  return (
    <Container>
      <TodoText done={done}>{title}</TodoText>
      <ButtonContainer>
        <Button
          bgColor={'#a9b3ff'}
          text={'done'}
          onPress={() => onPressDone(id)}
        />
        <Button
          bgColor={'tomato'}
          text={'del'}
          onPress={() => onPressDelete(id)}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Todo;
