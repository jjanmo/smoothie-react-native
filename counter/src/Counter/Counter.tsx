import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import Button from '../Button';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const handlePressPlus = () => {
    setCount(count + 1);
  };
  const handlePressMinus = () => {
    setCount(count - 1);
  };

  const hadlePressReset = () => {
    setCount(0);
  };

  return (
    <Container>
      <Title>This is Counter 😁</Title>
      <Count positive={count > 0} zero={count === 0}>
        {count}
      </Count>
      <ButtonContainer>
        <Button onPress={handlePressPlus} type="plus" />
        <Button onPress={hadlePressReset} type="reset" />
        <Button onPress={handlePressMinus} type="minus" />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled(Text)`
  font-size: 30px;
  font-weight: 600;
`;
const Count = styled(Text)<{ positive: boolean; zero: boolean }>`
  font-size: 100px;
  font-weight: 700;
  color: ${({ positive, zero }) => (positive ? '#4834d4' : zero ? '#535c68' : '#eb4d4b')};
`;
const ButtonContainer = styled(View)`
  width: 80%;
  flex-direction: row;
  justify-content: space-around;
`;
