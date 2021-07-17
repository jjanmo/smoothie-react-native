import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const SText = styled.Text`
  font-size: 16px;
  color: white;
`;

const EmptyScreen = () => {
  return (
    <Container>
      <SText>하단에 '+' 버튼을 눌러 새로운 할일을 등록해 보세요.</SText>
    </Container>
  );
};

export default EmptyScreen;
