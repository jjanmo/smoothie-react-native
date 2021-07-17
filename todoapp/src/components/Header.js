import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 94%;
  background-color: #7d798b;
  border-radius: 10px;
  margin: 20px auto;
  padding: 20px 0;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
`;
const Notification = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const Header = ({todos}) => {
  const doneTodo = todos.filter(todo => !todo.done).length;

  return (
    <Container>
      <Title>What is my main focus for today?</Title>
      <Notification>{`${doneTodo} / ${todos.length}`}</Notification>
    </Container>
  );
};

export default Header;
