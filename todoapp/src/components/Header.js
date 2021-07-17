import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 0.8;
  justify-content: center;
  align-items: center;
  width: 94%;
  background-color: #7d798b;
  margin: auto;
  border-radius: 10px;
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

const Header = () => {
  return (
    <Container>
      <Title>What is my main focus for today?</Title>
      <Notification>5 / 10</Notification>
    </Container>
  );
};

export default Header;
