import React, {useState} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components';
import EmptyScreen from '../screens/EmptyScreen';
import InputTodo from './InputTodo';
import Todo from './Todo';
import AddButton from './AddButton';

const List = styled(FlatList)``;

const AddContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const TodoList = ({todos, updateFunction}) => {
  const [showInput, setShowInput] = useState(false);

  const hideInputTodo = () => {
    setShowInput(false);
  };

  const onPressToggleInput = () => {
    setShowInput(!showInput);
  };

  const addTodo = text => {
    const todo = {
      id: Date.now().toString(),
      title: text,
      done: false,
    };
    const newTodos = [...todos, todo];
    updateFunction(newTodos);
  };

  const onPressDone = id => {
    console.log('done');
    const _todos = todos.map(todo =>
      id === todo.id ? {...todo, done: !todo.done} : todo,
    );
    updateFunction(_todos);
  };

  const onPressDelete = id => {
    console.log('delete');
    const _todos = todos.filter(todo => id !== todo.id);
    updateFunction(_todos);
  };

  const renderItem = ({item}) => {
    return (
      <Todo
        id={item.id}
        title={item.title}
        done={item.done}
        onPressDone={onPressDone}
        onPressDelete={onPressDelete}
      />
    );
  };

  return (
    <>
      <List
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={todos.length === 0 && {flex: 1}}
        ListEmptyComponent={<EmptyScreen />}
      />
      <AddContainer>
        <AddButton onPress={onPressToggleInput} />
        {showInput && (
          <InputTodo hideInputTodo={hideInputTodo} addTodo={addTodo} />
        )}
      </AddContainer>
    </>
    // <List>
    //   {todos.map((todo, index) => (
    //     <Todo
    //       id={todo.id}
    //       title={todo.title}
    //       done={todo.done}
    //       onPressDone={onPressDone}
    //       onPressDelete={onPressDelete}
    //     />
    //   ))}
    // </List>
  );
};

export default TodoList;
