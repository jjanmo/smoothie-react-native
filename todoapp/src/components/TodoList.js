import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styled from 'styled-components';
import Todo from './Todo';

const List = styled(FlatList)`
  width: 100%;
  flex: 1;
  /* background-color: dodgerblue; */
`;

const TodoList = ({todos, updateFunction}) => {
  console.log('todos👍', todos);

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
    console.log('📌', _todos);
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
    <List
      data={todos}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      // contentContainerStyle={{flex: 1}}
      ListEmptyComponent={
        <View
          style={{
            flex: 1,
            backgroundColor: '#eee',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 16}}>
            하단에 '+' 버튼을 눌러 새로운 할일을 등록해 보세요.
          </Text>
        </View>
      }
    />
  );
};

export default TodoList;
