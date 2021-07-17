import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components';
import Todo from './Todo';

const List = styled(FlatList)`
  flex: 1;
  width: 100%;
`;

const TodoList = ({data}) => {
  const renderItem = ({item}) => {
    return <Todo title={item.title} done={item.done} />;
  };

  return (
    <List data={data} renderItem={renderItem} keyExtractor={item => item.id} />
  );
};

export default TodoList;
