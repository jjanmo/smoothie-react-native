import React from 'react';
import styled from 'styled-components';

const Button = styled.TouchableOpacity`
  background-color: #ffcc00;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;
const SText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: white;
`;

const CircleButton = ({onPress}) => (
  <Button activeOpacity={0.7} onPress={onPress}>
    <SText>+</SText>
  </Button>
);

export default CircleButton;
