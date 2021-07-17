import React, {useState} from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components';

const Container = styled.KeyboardAvoidingView`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  justify-content: flex-end;
`;
const STextInput = styled.TextInput`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  background-color: #fff;
`;

const InputTodo = ({hideInputTodo, addTodo}) => {
  const [text, setText] = useState('');

  const onPressSumit = () => {
    if (text) {
      addTodo(text);
    }
    hideInputTodo();
    return;
  };

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <STextInput
        autoFocus
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter Todo!!"
        returnKeyType="none"
        maxLength={30}
        onChangeText={text => setText(text)}
        onSubmitEditing={onPressSumit}
      />
    </Container>
  );
};

export default InputTodo;
