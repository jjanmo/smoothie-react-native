import React from 'react';
import styled from 'styled-components';

const Container = styled.TouchableOpacity`
  background-color: ${props => props.bgColor};
  width: 50px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 5px 3px;
  border-radius: 8px;
`;
const SText = styled.Text`
  font-size: 13px;
  color: white;
`;

const Button = ({bgColor, text, onPress}) => {
  return (
    <Container activeOpacity={0.7} onPress={onPress} bgColor={bgColor}>
      <SText>{text.toUpperCase()}</SText>
    </Container>
  );
};

export default Button;
